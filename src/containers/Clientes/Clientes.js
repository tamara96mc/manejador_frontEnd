import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

import { ALL_CLIENTES, DELETE_CLIENTE, SELECT_CLIENTE } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';

const Clientes = (props) => {


    let PageSize = 5;

    const [currentPage, setCurrentPage] = useState(0); // hook para guardar el estado del paginador

    const [inputValue, setInputValue] = useState(); // hook para el buscador
    const [allClientes, setAllClientes] = useState([]); //hook para guardar los clientes

    const history = useNavigate();

    const gotoURL = (url) => {
        history(url);
    }

    // Para ver los detalles del cliente seleccionado
    const verCliente = (select_cliente) => {

        props.dispatch({ type: SELECT_CLIENTE, payload: select_cliente });
        history("/detallesCliente");
    }

    // Busca los clientes del Jira configurado
    useEffect(() => {

        getClientes();

    }, []);

    // Si hay clientes en REDUX los seteo en su hook
    useEffect(() => {

        setAllClientes(props.clientes.clientes);

    }, [props.clientes.clientes]);


    // Buscar clientes por el Jira ID
    const getClientes = async () => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            let res = await clienteAxios.get(`/cliente/jiraId/${props.jiras.jira.id}`, config);
            props.dispatch({ type: ALL_CLIENTES, payload: res.data });
            setAllClientes(res.data);
            setCurrentPage(1);

        } catch (error) {
            console.log(error);
        }
    };

    //Paso previo a borrar un cliente
    const onDelete = (cliente) => {

        window.confirm('¿Quiere eliminar el cliente ' + cliente.nombre + '?') &&
            removeCliente(cliente.telefono)

    }

// Borrar un cliente por su telefono
    const removeCliente = async (telefono) => {

        try {
            let token = props.credentials.token;
            //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            let res = await clienteAxios.delete(`/cliente/${telefono}`, config);
            props.dispatch({ type: DELETE_CLIENTE, payload: telefono });
            setCurrentPage(1);
            setInputValue('');

        } catch (error) {
            console.log(error);
        }
    };

    //Cuando se pulsa la X buscador se vuelven a cargar todos los clientes
    const loadClientes = () => {

        setAllClientes(props.clientes.clientes);
        setInputValue('');

    }

    // Para filtrar los clientes por el valor buscado
    const writefilm = (e) => {

        setInputValue(e.target.value);

        const filtered = allClientes.filter(cliente => {
            return cliente.nombre.toLowerCase().match(e.target.value.toLowerCase());
        })
        console.log("filtered2:", filtered)
        setAllClientes(filtered);
    }

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return allClientes.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, allClientes]);


    return (
        <div className="container">

            <h1 className="mb-1 mt-3" >Lista de clientes</h1>
            <p className="p-info-manejador mb-3"> En esta pantalla podemos dar permiso a los  clientes para crear tickets mediante WhatsApp. </p>
            {currentTableData && props.clientes.clientes.length != 0
                ?

                <div className="list-clientes basics_column">

                    <div className="input-buscador basics_row">
                        <input type="text" name="buscardor" value={inputValue} onChange={writefilm} placeholder="Buscar cliente.." />
                        <i className="fa fa-remove fa-2x" onClick={loadClientes}></i>
                    </div>
                    <ul className="list-group">

                        {currentTableData.map(info => {
                            return (
                                <li className="list-group-item" key={info.telefono}>
                                    <div className="row" >
                                        <div className="col-50 basics_row_start" onClick={() => verCliente(info)}>
                                            <FontAwesomeIcon icon={faUser} /> <span></span> <p className="cliente-nombre">{info.nombre}</p>
                                        </div>
                                        <div className="col-40 basics_row_start" onClick={() => verCliente(info)}>
                                            <FontAwesomeIcon icon={faWhatsapp} /> <span></span> <p className="cliente-nombre">{info.telefono}</p>
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
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={allClientes.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
                :
                <div className="img-load">
                    <p className="p-no-data">Aún no hay clientes creados.</p>
                </div>
            }
            <button className="send-button btn-cliente mt-2" onClick={() => gotoURL("/crearCliente")}>Crear cliente</button>
        </div>
    )
};

export default connect((state) => ({
    credentials: state.credentials,
    clientes: state.clientes,
    jiras: state.jiras
}))(Clientes);