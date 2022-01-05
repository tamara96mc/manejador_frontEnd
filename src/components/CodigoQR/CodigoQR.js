import React, { useState } from "react";
import img_wp from "../../images/info_whatapp.PNG"
import clienteAxios from '../../config/axios';
import { connect } from 'react-redux';

const Jira_QR = (props) => {


  const [qr, setQR] = useState('');


  const getQR = async () => {

    try {
 
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const manejador = {
        "telefono": props.jiras.jira.telefono,
      }
      debugger
      let res = await clienteAxios.post(`/manejador/createBot`, manejador, config);

      console.log('res'.res);

//       var bytes = Encoding.UTF8.GetBytes(svgString);
// var svg = Encoding.UTF8.GetString(bytes);

      setQR(res.data);

    } catch (error) {
      console.log(error);
    }

  };



  return (
    <div className="container-component">

      <h1>Vincular con WhatsApp</h1>
      <div className="row row-qr">
        <div className="col-50">
          <p className="p-info-manejador"> <b>Si aún no ha vinculado ningún dispositivo: </b> <br/> <br/> Para poder vincular el número de teléfono al manejador de JIRA tienes que pulsar el botón de <b>* Generar QR *</b> y después escanear el código con tu aplicacion de WhatsApp en: <br /> <i>Dispositivos vinculados {'>'} Vincular un dispositivo</i>  <br/> <br/> <b>Aqui puedes comprobar si ya está vinculado: </b> <br/> <br/> Si ya está vinculado no se generará un nuevo QR hasta que no se cierre la sesión.</p>
          <img  className="img-info-manejador mb-2" src={img_wp} />
        </div>
        <div className="col-50 card-img">
          {qr ? 
          <img src={qr} /> :
          <div className='qr-code'>
          </div> }

        </div>
      </div>
      <div className="row row-qr">
        <div className="col-100">
          <button className="send-button btn-qr" onClick={() => getQR()}>Generar QR</button>
        </div>
      </div>
    </div>
  )
};

export default connect((state) => ({
  credentials: state.credentials,
  jiras: state.jiras
}))(Jira_QR);