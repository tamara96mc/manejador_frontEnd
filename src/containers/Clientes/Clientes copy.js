import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { ALL_CLIENTES,DELETE_CLIENTE } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';

const Jira_proyectos = (props) => {


    let PageSize = 5;

    const [currentPage, setCurrentPage] = useState(0);


    const [allClientes, setAllClientes] = useState([]);

    useEffect(() => {

        getClientes();

    }, []);

    // useEffect(() => {
    //     if(props.clientes)
     
    //     setAllClientes([props.clientes]);
        
    // }, [props.clientes]);

    useEffect(() => {
      
        console.log('clietnes' ,allClientes );
        
    } );


    const history = useNavigate();

    const gotoURL = (url) => {
        history(url);
    }
    const getClientes = async () => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.get( "/cliente", config);
            props.dispatch({type:ALL_CLIENTES, payload:res.data});
            setAllClientes(res.data);
            setCurrentPage(1);

        } catch (error) {
            console.log(error);
        }
    };
    
    const removeCliente = async (telefono) => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.delete( `/cliente/${telefono}`, config);
            props.dispatch({type:DELETE_CLIENTE, payload:telefono});

        } catch (error) {
            console.log(error);
        }
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return allClientes.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className="container basics_column">
            <h1 className="mb-2" >Lista de clientes</h1>

            {currentTableData
                ?

                <div className="">
                     <input type="text" id="nombre" name="nombre" placeholder="Buscar cliente.." />
                    <ul className="list-group">

                        {currentTableData[0]?.clientes.map(info => {
                            return (
                                <li className="list-group-item"  key={info.telefono}>
                                    <div className="row" >
                                        <div className="col-75" onClick={() => gotoURL("/detallesCliente")}>
                                        <p className="cliente-nombre"><i class="fa fa-user"></i> {info.nombre}</p>
                                    <br />
                                    <p className="cliente-tlf"><i class="fa fa-whatsapp"></i>{info.telefono}</p>
                                    </div>
                                        <div className="col-25">
                                        <i className="far fa-trash-alt fa-2x" onClick={() => removeCliente(info.telefono)}></i>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={allClientes.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />

                    <button className="send-button btn-cliente mt-2" onClick={() => gotoURL("/crearCliente")}>Crear cliente</button>
                </div>
                :
                <div className="img-load">
                    <p className="no-pedidos">Aún no hay clientes</p>
                </div>
            }
        </div>
    )
};

export default connect((state) => ({
    // jiras: state.jiras,
    credentials: state.credentials,
    clientes: state.clientes
  }))(Jira_proyectos);