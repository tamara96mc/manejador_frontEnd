import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { UPDATE_CLIENTE } from '../../redux/types';
import clienteAxios from '../../config/axios';
import Pagination from '../../components/Pagination/Pagination';
import data from './data.json';

const DetallesCliente = (props) => {

  let PageSize = 3;

  const [clienteData, setclienteData] = useState();
  const [msgError, setmsgError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pedidosActivos, setPedidosActivos] = useState([]);

  const history = useNavigate();

  useEffect(() => {

    setPedidosActivos(data);
    setCurrentPage(1);

    // traePeliculas("/pedido");
  }, []);

  useEffect(() => {

    setclienteData(props.clientes.select_cliente);

}, [props.clientes.select_cliente]);

const handleChange = (e) => {
  //Función encargada de bindear el hook con los inputs.
  setclienteData({ ...clienteData, [e.target.name]: e.target.value });
}

const handleSubmit = async (e) => {

    e.preventDefault();
    debugger
    try {

      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
          headers: { Authorization: `Bearer ${token}` }
      };

      const cliente_nombre = {
        nombre : clienteData.nombre
      }
      
      let res = await clienteAxios.put(`/cliente/${props.clientes.select_cliente.telefono}`, cliente_nombre, config);
      setmsgError(`Cliente actualizado`);

      
      const updated_cliente = {
        nombre : clienteData.nombre,
        telefono :props.clientes.select_cliente.telefono
      }

      setTimeout(() => {
         props.dispatch({type:UPDATE_CLIENTE, payload:updated_cliente});
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
    return pedidosActivos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


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
          <div className="basics_column mt-2 mb-2">
          <div className="info">{msgError}</div>
            <button className="send-button btn-campos-guardar" type="submit" onClick={e => handleSubmit(e)}>Actualizar</button>
          </div>


          <div className="ctn-crear-cliente basics_column">


            <form className="form-campos basics_column" >
              <h2 className="mb-1 mt-1">Campos personalizados del cliente</h2>
              <div className="campos-col-50">
                <select className="select-campo-jira">
                  <option value="Jira Cloud">Empresa</option>
                  <option value="Jira Server">Módulo</option>
                  <option value="Jira Data Center">Correo</option>
                </select>
              </div>
              <span></span>
              <div className="campos-col-50">
                <input type="text" id="nombre" name="nombre" placeholder="Valor del campo" />
              </div>
              <button className="send-button btn-campos-guardar" type="button" >Añadir campo</button>
            </form>
          </div>

        </div>
        <div className="ctn-ver-campo basics_column">


          <h2 className="mb-1" >Lista de campos</h2>
          {currentTableData
            ?

            <div className="">
              <input type="text" id="nombre" name="nombre" placeholder="Buscar campos.." />
              <ul className="list-group">

                {currentTableData.map(info => {
                  return (
                    <li className="list-group-item" key={info._id}>
                      <div className="row" >
                        <div className="col-75">
                        <p className="cliente-nombre"> {info.campo}</p>
                          <br />
                          <p className="cliente-nombre"> {info.valor}</p>
                        </div>
                        <div className="col-25">
                          <i className="far fa-trash-alt fa-2x"></i>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>


              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={pedidosActivos.length}
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
  clientes: state.clientes
}))(DetallesCliente);