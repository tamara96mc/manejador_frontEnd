import React, { useState, useEffect, useMemo } from "react";
import Pagination from '../Pagination/Pagination';
import data from './data.json';

const Jira_proyectos = () => {


  let PageSize = 5;

  const [currentPage, setCurrentPage] = useState(0);


  const [pedidosActivos, setPedidosActivos] = useState([]);

  useEffect(() => {

    setPedidosActivos(data);
    setCurrentPage(1);

      // traePeliculas("/pedido");
  }, []);



  const traePeliculas = async (endPoint) => {

      // try {
      //     let token = props.credentials.token;
      //     //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      //     let config = {
      //         headers: { Authorization: `Bearer ${token}` }
      //     };
      //     let res = await clienteAxios.get(endPoint, config);

      //     setPedidosActivos(res.data);
      //     setCurrentPage(1);
      //     console.log('lenght' ,res.data.length);

      // } catch (error) {
      //     console.log(error);
      // }
  };

  const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return pedidosActivos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div  className="container basics_column">
            <h1>Proyectos</h1>
            {currentTableData
            ?

                <div className="basics_column">
                    <table className="table-responsive">
                        <thead>
                            <tr>
                                <th>Proyecto</th>
                                <th>Tipo de tarea</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentTableData.map(info => {
                                return (
                                    <tr key={info._id}>
                                        <td>{info.proyecto}</td>
                                        <td>{info.tipo}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={pedidosActivos.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                      <button className="nav-button" onClick={() => { }}>Guardar</button>
                </div>
                :
                <div className="img-load">
                    <p className="no-pedidos">Aún no hay proyectos</p>
                </div>
            }
        </div>
  )
};
export default Jira_proyectos;