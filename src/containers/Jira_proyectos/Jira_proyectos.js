import React, { useState, useEffect, useMemo } from "react";

import Pagination from '../../components/Pagination/Pagination';
import data from './data.json';


const DetallesCliente = () => {

  let PageSize = 3;

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
      <h1 className="mb-2 mt-3">Proyectos de Jira</h1>

      <div className="ctn-campo basics_row ">
        <div className="ctn-crear-campo basics_column">

          <h2 className="mb-1">Crear proyecto</h2>
          <form className="form-campos basics_column" onSubmit={handleSubmit}>
            <p className="p-info-campos">En esta pantalla podemos configurar los proyectos de Jira, <br /> los cuales pueden ser elegidos cuando crear un ticket por WhatsApp. </p>

            <div className="campos-col-50">
              <input className="input-campos" type="text" id="id" name="id" placeholder="Nombre del proyecto" v />
            </div>
            <span></span>
            <div className="campos-col-50">
              <input className="input-campos" type="text" id="nombre" name="nombre" placeholder="Tipo de proyecto" />
            </div>
            <button className="send-button btn-campos-guardar" type="submit">Guardar</button>
          </form>
        </div>

        <div className="ctn-ver-campo basics_column">

        <h2 className="mb-1" >Lista de proyectos</h2>
            {currentTableData
                ?

                <div className="">
                     <input type="text" id="nombre" name="nombre" placeholder="Buscar proyecto.." />
                    <ul className="list-group">

                        {currentTableData.map(info => {
                            return (
                                <li className="list-group-item" key={info._id}>
                                  
                                  <div className="row" >
                                        <div className="col-75">
                                        <p className="cliente-nombre"> {info.proyecto}</p>
                                    <br />
                                    <p className="cliente-nombre"> {info.tipo}</p>
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