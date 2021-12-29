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
      <h1 className="mb-4 mt-3">Campos personalizados de Jira</h1>

      <div className="ctn-campo">
        <div className="ctn-crear-campo basics_column">

          <h2 className="mb-1">Crear ampos personalizados</h2>
          <form className="form-campos basics_column" onSubmit={handleSubmit}>
            <p className="p-info-campos">En esta pantalla podemos configurar los campos personalidos de Jira, los cuales pueden ser utilizados en los clientes para añadir más información al ticket en su creación. </p>

            <div className="campos-col-50">
              <input className="input-campos" type="text" id="id" name="id" placeholder="ID del campo" v />
            </div>
            <span></span>
            <div className="campos-col-50">
              <input className="input-campos" type="text" id="nombre" name="nombre" placeholder="Nombre del campo" />
            </div>
            <button className="send-button btn-campos-guardar" type="submit">Guardar</button>
          </form>
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
                        <p className="cliente-nombre"> {info.nombre}</p>
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
export default DetallesCliente;