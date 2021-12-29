import React, { useState, useEffect, useMemo } from "react";

import Pagination from '../../components/Pagination/Pagination';
import data from './data.json';

const DetallesCliente = () => {

  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(0);


  const [pedidosActivos, setPedidosActivos] = useState([]);

  useEffect(() => {

    setPedidosActivos(data);
    setCurrentPage(1);

    // traePeliculas("/pedido");
}, []);
  let handleSubmit = (event) => {
    event.preventDefault();

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
              <input type="text" id="nombre" name="nombre" placeholder="Nombre del cliente..." />
            </div>
          </div>
          <div className="row">
            <div className="col-40">
              <label> <i class="fa fa-whatsapp"></i>Teléfono</label>
            </div>
            <div className="col-75">
              <input type="text" id="nombre" name="nombre" placeholder="Teléfono del cliente..." />
            </div>
          </div>

          <div className="basics_row mt-2 mb-2">
            <button className="send-button btn-campos-guardar " type="submit">Actualizar</button>
          </div>


          <div className="ctn-crear-cliente basics_column">

            
            <form className="form-campos basics_column" onSubmit={handleSubmit}>
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
                      <p className="cliente-nombre"> {info.campo}</p>
                      <br />
                      <p className="cliente-nombre"> {info.valor}</p>
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
export default DetallesCliente;