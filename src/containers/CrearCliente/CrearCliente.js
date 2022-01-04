import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NEW_CLIENTE } from '../../redux/types';
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const CrearCliente = (props) => {

  const [newCliente, setNewCliente] = useState('');

  const history = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      const cliente = {
        "telefono": newCliente.telefono,
        "nombre": newCliente.nombre,
        "jiraId": props.jiras.jira.id
      }
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
          headers: { Authorization: `Bearer ${token}` }
      };

      let res = await clienteAxios.post(`/cliente`, cliente, config);
      
      props.dispatch({ type: NEW_CLIENTE, payload: cliente });
      setTimeout(() => {
        history("/clientes");
     }, 2000);
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setNewCliente({ ...newCliente, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <form className="form-user">
        <h1 className="mb-3">Nuevo cliente</h1>
        <div className="row">
          <div className="col-40">
            <label> <i class="fa fa-user"></i>Nombre</label>
          </div>
          <div className="col-75">
            <input type="text" name="nombre" placeholder="Nombre del cliente..." onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-40">
            <label> <i class="fa fa-whatsapp"></i>Teléfono</label>
          </div>
          <div className="col-75">
            <input type="text" name="telefono" placeholder="Teléfono del cliente..." onChange={handleChange} />
          </div>
        </div>
        <div className="basics_row mt-5">
          <button className="send-button" type="submit" onClick={ e => handleSubmit(e)}>Crear cliente</button>
        </div>
      </form>
    </div>
  )
};
export default connect((state) => ({
  jiras: state.jiras,
  credentials: state.credentials
}))(CrearCliente);
