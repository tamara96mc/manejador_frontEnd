import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faTasks, faTrash } from '@fortawesome/free-solid-svg-icons';


import { ALL_PROYECTOS, DELETE_PROYECTO, NEW_PROYECTO, UPDATE_PROYECTO, NO_UPDATE_PROYECTO, SELECT_PROYECTO } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';



const Jira_proyectos = (props) => {

  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(0); // hook para el paginador
  const [msgError, setmsgError] = useState("");
  const [inputValue, setInputValue] = useState(); // hook para el buscador
  const [newProyecto, setNewProyecto] = useState(''); // hok para crer nuevo proyecto
  const [selectProyecto, setSelectProyecto] = useState(); // hook para guardar el proyecto seleccinado de la lista
  const [allProyectos, setallProyectos] = useState([]); // hook para guardar los proyectos del Jira 


  // Guardar el proyecto selecionado en REDUX para modificarlo 
  const verProyecto = (select_proyecto) => {

    props.dispatch({ type: SELECT_PROYECTO, payload: select_proyecto });

  }

  // Buscar los proyectos del Jira 
  useEffect(() => {

    getProyectos();

  }, []);

  // Si en REDUX está los proyectos los guardamos en su state
  useEffect(() => {

    setallProyectos(props.proyectos.proyectos);

  }, [props.proyectos.proyectos]);

  // Si en REDUX está el proyecto seleccionado lo guardamo en su state 
  useEffect(() => {

    setSelectProyecto(props.proyectos.select_proyecto);

  }, [props.proyectos.select_proyecto]);


  // Crear nuevo proyecto
  const addProyecto = async (e) => {

    e.preventDefault();
    try {

      const proyecto = {
        "nombre": newProyecto.nombre,
        "tipo": newProyecto.tipo,
        "jiraId": props.jiras.jira.id
      }
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      let res = await clienteAxios.post(`/proyecto`, proyecto, config);

      debugger
      props.dispatch({ type: NEW_PROYECTO, payload: res.data });

      setNewProyecto('');

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {

    if (selectProyecto) {
      setSelectProyecto({ ...selectProyecto, [e.target.name]: e.target.value });
    } else {
      setNewProyecto({ ...newProyecto, [e.target.name]: e.target.value });
    }

  }

  // Buscar proyectos
  const getProyectos = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get(`/proyecto/jiraId/${props.jiras.jira.id}`, config);
      props.dispatch({ type: ALL_PROYECTOS, payload: res.data });

      setallProyectos(res.data);
      setCurrentPage(1);

    } catch (error) {
      console.log(error);
    }
  };

  // Paso previo a borrar un proyecto
  const onDelete = (proyecto) => {

    window.confirm('¿Quiere eliminar el proyecto ' + proyecto.nombre + '?') &&
      removeProyecto(proyecto.id)

  }
  // Borrar un proyecto
  const removeProyecto = async (id) => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.delete(`/proyecto/${id}`, config);
      debugger
      props.dispatch({ type: DELETE_PROYECTO, payload: id });
      setCurrentPage(1);
      setInputValue('');

    } catch (error) {
      console.log(error);
    }
  };


  // Modificar un proyecto
  const updateProyecto = async (e) => {

    e.preventDefault();
    debugger
    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const updatedProyecto = {
        nombre: selectProyecto.nombre,
        tipo: selectProyecto.tipo,
        jiraId: 4
      }

      let res = await clienteAxios.put(`/proyecto/${props.proyectos.select_proyecto.id}`, updatedProyecto, config);
      setmsgError(`Proyecto actualizado`);

      const updatedProyectoID = {
        id: props.proyectos.select_proyecto.id,
        nombre: selectProyecto.nombre,
        tipo: selectProyecto.tipo,
        jiraId: props.jiras.jira.id
      }

      props.dispatch({ type: UPDATE_PROYECTO, payload: updatedProyectoID });
      setSelectProyecto('');
      setNewProyecto('');

    } catch (error) {
      console.log(error);
      setmsgError(`El proyecto no ha podido ser actualizado`);
    }

  }

  // Quitar el proyecto seleccionado ya que no será modificado
  const NO_updateProyecto = async (e) => {

    props.dispatch({ type: NO_UPDATE_PROYECTO, payload: '' });
    setSelectProyecto('');
    setNewProyecto('');

  }

  // Cargar los proyectos de REDUX cuando temine la busqueda
  const loadProyectos = () => {
    setallProyectos(props.proyectos.proyectos);
    setInputValue('');
  }

  // Filtro para buscar los proyectos con el input
  const writefilm = (e) => {

    setInputValue(e.target.value);

    const filtered = allProyectos.filter(proyecto => {
      return proyecto.nombre.toLowerCase().match(e.target.value.toLowerCase());
    })
    setallProyectos(filtered);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allProyectos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allProyectos]);

  return (
    <div className="container container-campos">
      <h1 className="mt-3">Proyectos de Jira</h1>

      <p className="p-info-campos mb-5">En esta pantalla podemos configurar los proyectos de Jira, los cuales pueden ser elegidos cuando un cliente crear un ticket por WhatsApp. </p>

      {/*****  FORMULARIO PARA CREAR O MODIFICAR UN PROYECTO   ******/}
      <div className="ctn-campo basics_row ">
        <div className="ctn-crear-campo basics_column mb-2">

          <form className="form-campos basics_column">
            {selectProyecto ? <h2 className="mb-2">Actualizar proyecto</h2> : <h2 className="mb-2">Crear proyecto</h2>}

            <div className="campos-col-50 mb-1">
              <input className="input-campos" type="text" name="nombre" placeholder="Nombre del proyecto" value={newProyecto?.nombre || selectProyecto?.nombre || ''} onChange={handleChange} />
            </div>
            <span></span>
            <div className="campos-col-50 mb-3">
              <input className="input-campos" type="text" name="tipo" placeholder="Tipo de proyecto" value={newProyecto?.tipo || selectProyecto?.tipo || ''} onChange={handleChange} />
            </div>

            {selectProyecto ?

              <div className="basics_row_space row_to_column">
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => updateProyecto(e)}>Actualizar</button>
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => NO_updateProyecto(e)}>Cancelar</button>
              </div>
              :
              <>
                {/* <div className="info">{msgError}</div> */}
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => addProyecto(e)}>Guardar</button>

              </>
            }

          </form>
        </div>

        <div className="ctn-ver-campo basics_column">
          {/*****  LISTADO DE LOS PROYECTOS  ******/}
          <h2 className="mb-1" >Lista de proyectos</h2>
          {currentTableData && props.proyectos.proyectos.length != 0
            ?

            <div className="list-clientes basics_column">
              <div className="input-buscador basics_row">
                <input type="text" name="buscardor" value={inputValue} onChange={writefilm} placeholder="Buscar proyecto.." />
                <i className="fa fa-remove fa-2x" onClick={loadProyectos}></i>
              </div>
              <ul className="list-group">

                {currentTableData.map(info => {
                  return (
                    <li className="list-group-item" key={info.id}>

                      <div className="row" >
                        <div className="col-40 basics_row_start" onClick={() => verProyecto(info)}>
                          <p className="cliente-nombre"> <span></span>  <FontAwesomeIcon icon={faProjectDiagram} /> {info.nombre}</p>
                        </div>
                        <div className="col-50 basics_row_start" onClick={() => verProyecto(info)}>
                          <p className="cliente-nombre"><span></span> <FontAwesomeIcon icon={faTasks} /> {info.tipo}</p>
                        </div>
                        <div className="col-10 basics_row" onClick={() => onDelete(info)}>
                          <FontAwesomeIcon icon={faTrash} size="2x" />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <Pagination
                className="pagination-bar mb-5"
                currentPage={currentPage}
                totalCount={allProyectos.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            </div>
            :
            <div className="img-load">
              <p className="p-no-data">Aún no hay proyectos creados.</p>
            </div>
          }

        </div>

      </div>


    </div>

  )
};
export default connect((state) => ({
  credentials: state.credentials,
  proyectos: state.proyectos,
  jiras: state.jiras
}))(Jira_proyectos);