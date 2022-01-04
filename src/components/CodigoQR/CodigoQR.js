import React, { useState } from "react";


import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';
const Jira_QR = (props) => {


  const [qr, setQR] = useState('');

 
  const getQR = async () => {

    try {
      debugger
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const manejador = {
        "telefono": props.jiras.jira.telefono,
      }

      let res = await clienteAxios.post(`/manejador/createBot`, manejador, config);

      console.log('res' . res);

      setQR(res.data);

    } catch (error) {
      console.log(error);
    }

  };



  return (
    <div  className="container-component">
 
        <h1>Vincular con WhatsApp</h1>
        <div  className="row row-qr">
          <div  className="col-50">
            <p className="p-info-manejador">Para poder vincular el número de teléfono al manejador de JIRA tienes que pulsar el botón de <b>* Generar QR *</b> y después escanear el código con tu aplicacion de WhatsApp en: <br/> <i>Dispositivos vinculados {'>'} Vincular un dispositivo</i> </p>  
          </div>
          <div  className="col-50 card-img">
          <img className='qr-code img-thumbnail img-responsive' src={qr} />
          </div>
        </div>
        <div  className="row row-qr">
          <div  className="col-100">
          <button  className="send-button btn-qr" onClick={() => getQR() }>Generar QR</button>
          </div>
        </div>
    </div>
  )
};

export default connect((state) => ({
  credentials: state.credentials,
  jiras: state.jiras
}))(Jira_QR);