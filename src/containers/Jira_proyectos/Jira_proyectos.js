import React, { useState, useEffect, useMemo } from "react";
import { ALL_PROYECTOS, DELETE_PROYECTO, NEW_PROYECTO , UPDATE_PROYECTO, NO_UPDATE_PROYECTO , SELECT_PROYECTO } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';



const Jira_proyectos = (props) => {

  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(0);
  const [msgError, setmsgError] = useState("");
  const [inputValue, setInputValue] = useState();
  const [newProyecto, setNewProyecto] = useState('');
  const [selectProyecto, setSelectProyecto] = useState();
  const [allProyectos, setallProyectos] = useState([]);


  const verProyecto = (select_proyecto) => {

    props.dispatch({ type: SELECT_PROYECTO, payload: select_proyecto });

  }

  useEffect(() => {

    getProyectos();

  }, []);

  useEffect(() => {

    setallProyectos(props.proyectos.proyectos);

  }, [props.proyectos.proyectos]);

  useEffect(() => {

    setSelectProyecto(props.proyectos.select_proyecto);

  }, [props.proyectos.select_proyecto]);


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

      props.dispatch({ type: NEW_PROYECTO, payload: proyecto });

      setNewProyecto('');

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {

    if(selectProyecto){
      setSelectProyecto({ ...selectProyecto, [e.target.name]: e.target.value });
    }else{
      setNewProyecto({ ...newProyecto, [e.target.name]: e.target.value });
    }
  
  }

  const getProyectos = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get("/proyecto", config);
      props.dispatch({ type: ALL_PROYECTOS, payload: res.data });

      setallProyectos(res.data);
      setCurrentPage(1);

    } catch (error) {
      console.log(error);
    }
  };

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
        id:props.proyectos.select_proyecto.id,
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

  const NO_updateProyecto = async (e) => {

    props.dispatch({ type: NO_UPDATE_PROYECTO, payload: '' });
    setSelectProyecto('');
    setNewProyecto('');

  }

  const loadProyectos = () => {
    setallProyectos(props.proyectos.proyectos);
    setInputValue('');
  }

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
      <h1 className="mb-2 mt-3">Proyectos de Jira</h1>

      <div className="ctn-campo basics_row ">
        <div className="ctn-crear-campo basics_column">

        
          <form className="form-campos basics_column">
          {selectProyecto  ? <h2 className="mb-1">Actualizar proyecto</h2> : <h2 className="mb-1">Crear proyecto</h2>}
            <p className="p-info-campos">En esta pantalla podemos configurar los proyectos de Jira, <br /> los cuales pueden ser elegidos cuando crear un ticket por WhatsApp. </p>

            <div className="campos-col-50">
              <input className="input-campos" type="text" name="nombre" placeholder="Nombre del proyecto" value={newProyecto?.nombre || selectProyecto?.nombre || ''} onChange={handleChange} />
            </div>
            <span></span>
            <div className="campos-col-50">
              <input className="input-campos" type="text" name="tipo" placeholder="Tipo de proyecto" value={newProyecto?.tipo || selectProyecto?.tipo || ''} onChange={handleChange} />
            </div>

            {selectProyecto ?
              
                <div  className="basics_row_space row_to_column mt-3">
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => updateProyecto(e)}>Actualizar</button>
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => NO_updateProyecto(e)}>Cancelar</button>
                </div>
              :
              <>
                {/* <div className="info">{msgError}</div> */}
                <button className="send-button btn-campos-guardar mt-3" type="submit" onClick={e => addProyecto(e)}>Guardar</button>
              
              </>
            }

          </form>
        </div>

        <div className="ctn-ver-campo basics_column">

          <h2 className="mb-1" >Lista de proyectos</h2>
          {currentTableData
            ?

            <div className="">
              <div className="input-buscador basics_row">
                <input type="text" name="buscardor" value={inputValue} onChange={writefilm} placeholder="Buscar proyecto.." />
                <i className="fa fa-remove fa-2x" onClick={loadProyectos}></i>
              </div>
              <ul className="list-group">

                {currentTableData.map(info => {
                  return (
                    <li className="list-group-item" key={info.id}>

                      <div className="row" >
                        <div className="col-75" onClick={() => verProyecto(info)}>
                          <p className="cliente-nombre"> {info.nombre}</p>
                          <br />
                          <p className="cliente-nombre"  > {info.tipo}</p>
                        </div>
                        <div className="col-25" onClick={() => removeProyecto(info.id)}>
                          <i className="far fa-trash-alt fa-2x"></i>
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
              <p className="no-pedidos">Aún no hay proyectos</p>
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