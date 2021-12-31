import React, { useState, useEffect, useMemo } from "react";
import { ALL_CAMPOS, DELETE_CAMPO, NEW_CAMPO , UPDATE_CAMPO, SELECT_CAMPO } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';


const Jira_campos = (props) => {


  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(0);
  const [msgError, setmsgError] = useState("");
  const [inputValue, setInputValue] = useState();
  const [newCampo, setNewCampo] = useState('');
  const [selectCampo, setSelectCampo] = useState();
  const [allCampos, setallCampos] = useState([]);


  const verCampo = (select_campo) => {

    props.dispatch({ type: SELECT_CAMPO, payload: select_campo });

  }

  useEffect(() => {

    getCampos();

  }, []);

  useEffect(() => {

    setallCampos(props.campos.campos);

  }, [props.campos.campos]);

  useEffect(() => {

    setSelectCampo(props.campos.select_campo);

  }, [props.campos.select_campo]);


  const addCampo = async (e) => {

    e.preventDefault();
    try {

      const campo = {
        "custom_field": newCampo.custom_field,
        "nombre": newCampo.nombre,
        "jiraId": 4
      }
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      let res = await clienteAxios.post(`/campo`, campo, config);

      props.dispatch({ type: NEW_CAMPO, payload: campo });

      setNewCampo('');

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {

    if(selectCampo){
      setSelectCampo({ ...selectCampo, [e.target.name]: e.target.value });
    }else{
      setNewCampo({ ...newCampo, [e.target.name]: e.target.value });
    }
  
  }

  const getCampos = async () => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.get("/campo", config);
      props.dispatch({ type: ALL_CAMPOS, payload: res.data });

      setallCampos(res.data);
      setCurrentPage(1);

    } catch (error) {
      console.log(error);
    }
  };

  const removeCampo = async (id) => {

    try {
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      let res = await clienteAxios.delete(`/campo/${id}`, config);

      props.dispatch({ type: DELETE_CAMPO, payload: id });
      setCurrentPage(1);
      setInputValue('');

    } catch (error) {
      console.log(error);
    }
  };


  const updateCampo = async (e) => {

    e.preventDefault();
    debugger
    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const updatedCampo = {
        custom_field: selectCampo.custom_field,
        nombre: selectCampo.nombre,
        jiraId: 4
      }

      let res = await clienteAxios.put(`/campo/${props.campos.select_campo.id}`, updatedCampo, config);
      setmsgError(`campo actualizado`);

      const updatedCampoID = {
        id: props.campos.select_campo.id,
        custom_field: selectCampo.custom_field,
        nombre: selectCampo.nombre,
        jiraId: 4
      }

      props.dispatch({ type: UPDATE_CAMPO, payload: updatedCampoID });
      setSelectCampo('');
      setNewCampo('');

    } catch (error) {
      console.log(error);
      setmsgError(`El campo no ha podido ser actualizado`);
    }

  }

  const loadCampos = () => {
    setallCampos(props.campos.campos);
    setInputValue('');
  }

  const writefilm = (e) => {

    setInputValue(e.target.value);

    const filtered = allCampos.filter(campo => {
      return campo.nombre.toLowerCase().match(e.target.value.toLowerCase());
    })
    setallCampos(filtered);
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allCampos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allCampos]);


  return (
    <div className="container container-campos">
      <h1 className="mb-4 mt-3">Campos personalizados de Jira</h1>

      <div className="ctn-campo">
        <div className="ctn-crear-campo basics_column">

        {selectCampo  ? <h2 className="mb-1">Actualizar campo</h2> : <h2 className="mb-1">Crear campo</h2>}
          <form className="form-campos basics_column">
            <p className="p-info-campos">En esta pantalla podemos configurar los campos personalidos de Jira, los cuales pueden ser utilizados en los clientes para añadir más información al ticket en su creación. </p>

            <div className="campos-col-50">
              <input className="input-campos" type="text"  name="custom_field" placeholder="ID del campo" value={newCampo?.custom_field || selectCampo?.custom_field || ''} onChange={handleChange} />
            </div>
            <span></span>
            <div className="campos-col-50">
              <input className="input-campos" type="text" name="nombre" placeholder="Nombre del campo" value={newCampo?.nombre || selectCampo?.nombre || ''} onChange={handleChange} />
            </div>
            {selectCampo ?
              <>
                {/* <div className="info">{msgError}</div> */}
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => updateCampo(e)}>Actualizar</button>
                </>
              :
              <>
                {/* <div className="info">{msgError}</div> */}
                <button className="send-button btn-campos-guardar" type="submit" onClick={e => addCampo(e)}>Guardar</button>
              
              </>
            }
          </form>
        </div>

        <div className="ctn-ver-campo basics_column">

          <h2 className="mb-1" >Lista de campos</h2>
          {currentTableData
            ?
            <div className="mb-3">
              <div className="input-buscador basics_row">
                <input type="text" name="buscardor" value={inputValue} onChange={writefilm} placeholder="Buscar campo.." />
                <i className="fa fa-remove fa-2x" onClick={loadCampos}></i>
              </div>
             <ul className="list-group">

                {currentTableData.map(info => {
                  return (
                    <li className="list-group-item" key={info.id}>

                      <div className="row" >
                        <div className="col-75" onClick={() => verCampo(info)}>
                        <p className="cliente-nombre"> {info.nombre}</p>
                        </div>
                        <div className="col-25" onClick={() => removeCampo(info.id)}>
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
                totalCount={allCampos.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            </div>
            :
            <div className="img-load">
              <p className="no-pedidos">Aún no hay campos</p>
            </div>
          }

        </div>

      </div>


    </div>

  )
};
export default connect((state) => ({
  credentials: state.credentials,
  campos: state.campos,
  jiras: state.jiras
}))(Jira_campos);