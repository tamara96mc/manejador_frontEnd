import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { UPDATE_CLIENTE, ALL_DATOS, NEW_DATO, DELETE_DATO, SELECT_DATO, UPDATE_DATO, NO_UPDATE_DATO } from '../../redux/types';
import clienteAxios from '../../config/axios';
import Pagination from '../../components/Pagination/Pagination';
import data from './data.json';

const DetallesCliente = (props) => {

  let PageSize = 3;

  const [clienteData, setclienteData] = useState();
  const [datos, setDatos] = useState();
  const [newDato, setNewDato] = useState();
  const [selectDato, setSelectDato] = useState();
  const [allDatos, setallDatos] = useState([]);
  const [msgError, setmsgError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const history = useNavigate();

  useEffect(() => {

    setCurrentPage(1);
    getCampos();

  }, []);

  useEffect(() => {

    setclienteData(props.clientes.select_cliente);
    getDatos();
  }, [props.clientes.select_cliente]);

  useEffect(() => {

    if (clienteData?.telefono)
      getDatos();

  }, [clienteData?.telefono]);

  useEffect(() => {

    setallDatos(props.datos.datos);

  }, [props.datos.datos]);


  useEffect(() => {

    setSelectDato(props.datos.select_dato);

  }, [props.datos.select_dato]);

  const getCampos = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get(`/campo/jiraId/${props.jiras.jira.id}`, config);

     setDatos(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeDatos = (e) => {

    console.log("info ", [e.target.name], '---', e.target.id);

    if (selectDato) {
      setSelectDato({ ...selectDato, [e.target.name]: e.target.value });
    } else {
      setNewDato({ ...newDato, [e.target.name]: e.target.value });
    }

  }

  const addDato = async (e) => {

    e.preventDefault();

    var e = document.getElementById("nombreCampo");

    try {

      const new_dato = {
        "valor": newDato.valor,
        "telefono": clienteData.telefono,
        "campoId": e.value
      }
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      debugger

      let res = await clienteAxios.post(`/dato`, new_dato, config);

     
      var strcampo = e.options[e.selectedIndex].text;


      const new_dato_data = {
        id: res.data.id,
        nombre: strcampo,
        valor: newDato.valor,
        telefono: clienteData.telefono,
        campoId: newDato.id
      }
      props.dispatch({ type: NEW_DATO, payload: new_dato_data });

      setNewDato('');

    } catch (error) {
      console.log(error)
    }
  }

  const getDatos = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get(`/dato/telefono/${clienteData.telefono}`, config);

      props.dispatch({ type: ALL_DATOS, payload: res.data });

      setallDatos(res.data);
      setCurrentPage(1);

    } catch (error) {
      console.log(error);
    }
  };



  const verDato = (select_dato) => {

    props.dispatch({ type: SELECT_DATO, payload: select_dato });

  }

  const onDelete = (dato) => {

    window.confirm('¿Quiere eliminar el valor ' + dato.nombre + '?') &&
      removeDato(dato.id)

  }

  const removeDato = async (id) => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      let res = await clienteAxios.delete(`/dato/${id}`, config);

      props.dispatch({ type: DELETE_DATO, payload: id });
      setCurrentPage(1);
      //setInputValue('');

    } catch (error) {
      console.log(error);
    }
  };


  const updateDato = async (e) => {

    e.preventDefault();

    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const updatedDato = {
        valor: selectDato.valor,
        telefono: clienteData.telefono,
        campoId: props.datos.select_dato.campoId
      }

      let res = await clienteAxios.put(`/dato/${props.datos.select_dato.id}`, updatedDato, config);

      const updatedDatoID = {
        id: props.datos.select_dato.id,
        nombre: props.datos.select_dato.nombre,
        valor: selectDato.valor,
        telefono: clienteData.telefono,
        campoId: props.datos.select_dato.campoId
      }

      props.dispatch({ type: UPDATE_DATO, payload: updatedDatoID });
      setSelectDato('');
      setNewDato('');

    } catch (error) {
      console.log(error);

    }

  }

  const NO_updateDato = async (e) => {

    props.dispatch({ type: NO_UPDATE_DATO, payload: '' });
    setSelectDato('');
    setNewDato('');

  }



  const handleChange = (e) => {
    //Función encargada de bindear el hook con los inputs.
    setclienteData({ ...clienteData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const cliente_nombre = {
        nombre: clienteData.nombre
      }

      let res = await clienteAxios.put(`/cliente/${props.clientes.select_cliente.telefono}`, cliente_nombre, config);
      setmsgError(`Cliente actualizado`);


      const updated_cliente = {
        nombre: clienteData.nombre,
        telefono: props.clientes.select_cliente.telefono
      }

      setTimeout(() => {
        props.dispatch({ type: UPDATE_CLIENTE, payload: updated_cliente });
        history("/clientes");
      }, 2000);

    } catch (error) {
      console.log(error);
      setmsgError(`El cliente no ha podido ser actializado`);
    }

  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allDatos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allDatos]);


  return (
    <div className="container container-campos">
      <h1 className="mt-3">Datos cliente</h1>
      <div className="ctn-cliente">

        <div className="ctn-crear-cliente basics_column">
          <div className="row">
            <div className="col-40">
              <label> <i class="fa fa-user"></i>Nombre</label>
            </div>
            <div className="col-75">
              <input type="text" id="nombre" name="nombre" placeholder="Nombre del cliente..." value={clienteData?.nombre || ''} onChange={handleChange} />
            </div>
          </div>
          <div className="basics_column mb-2">
            <div className="info">{msgError}</div>
            <button className="send-button btn-campos-guardar" type="submit" onClick={e => handleSubmit(e)}>Actualizar</button>
          </div>


          {props.campos.campos.length != 0 ?

            <div className="ctn-crear-cliente mb-2">

              <form className="form-campos basics_column" >
                {selectDato ? <h2 className="mb-2 mt-1">Actualizar dato</h2> : <h2 className="mb-2 mt-1">Crear dato</h2>}
                <div className="campos-col-50 mb-1">

                  {selectDato ?


                    <label type="text" name="nombre" placeholder="Valor del campo" value={selectDato?.nombre || ''}>{selectDato?.nombre || ''}</label>
                    :

                    <select className="select-campo-jira" name="id" id="nombreCampo" onChange={handleChangeDatos}>
                      {datos && datos.map((value, key) =>
                        <option className="select_items" key={key} value={value.id} >{value.nombre}</option>)}
                    </select>}
                </div>
                <span></span>
                <div className="campos-col-50 mb-2">
                  <input type="text" name="valor" placeholder="Valor del campo" value={newDato?.valor || selectDato?.valor || ''} onChange={handleChangeDatos} />
                </div>

                {selectDato ?
                  <div className="basics_row_space row_to_column">
                    <button className="send-button btn-campos-guardar" type="submit" onClick={e => updateDato(e)}>Actualizar</button>
                    <button className="send-button btn-campos-guardar" type="submit" onClick={e => NO_updateDato(e)}>Cancelar</button>
                  </div>
                  :
                  <>
                    {/* <div className="info">{msgError}</div> */}
                    <button className="send-button btn-campos-guardar" type="button" onClick={e => addDato(e)} >Añadir campo</button>

                  </>
                }

              </form>
            </div>
            :
            <div className="no-data-campos basics_column">
              <p>Aún no hay campos configurados para esta sección.</p>

            </div>

          }

        </div>
        <div className="ctn-ver-campo basics_column">


          <h2 className="mb-1" >Lista de datos</h2>
          {currentTableData && props.datos.datos.length != 0
            ?

            <div className="lista-campos">
              <ul className="list-group">

                {currentTableData.map(info => {
                  return (
                    <li className="list-group-item" key={info.id}>
                      <div className="row" >
                        <div className="col-75" onClick={() => verDato(info)}>
                          <p className="cliente-nombre"> {info.nombre}</p>
                          <br />
                          <p className="cliente-nombre"> {info.valor}</p>
                        </div>
                        <div className="col-25" onClick={() => onDelete(info)}>
                          <FontAwesomeIcon icon={faTrash} size="2x" />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>


              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={allDatos.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            </div>
            :
            <div className="img-load">
              <p className="p-no-data">Aún no hay datos creados.</p>
            </div>
          }

        </div>

      </div>
    </div>

  )
};
export default connect((state) => ({
  credentials: state.credentials,
  clientes: state.clientes,
  campos: state.campos,
  jiras: state.jiras,
  datos: state.datos
}))(DetallesCliente);
