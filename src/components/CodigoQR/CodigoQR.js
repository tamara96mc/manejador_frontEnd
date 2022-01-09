import React, { useState , useEffect} from "react";
import img_wp from "../../images/info_whatapp.PNG"
import axios from 'axios';
import { connect } from 'react-redux';
import { NEW_QR} from '../../redux/types';

const Jira_QR = (props) => {


  const [qr, setQR] = useState();

  //actualizo el hook con el QR que está en REDUX

  useEffect(() => {

    setQR(props.codigo.qr);

  }, [props.codigo.qr]);


  //Genero el código QR con el número de telefono que tengo en REDUX
  const getQR = async () => {

    try {

      //Limpiamos el código anterior
      setQR('');
 
      let token = props.credentials.token;
      //CREAMOS LA CONFIGURACIÓN DEL HEADER QUE SE VA A MANDAR
      let config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const manejador = {
        "telefono": props.jiras.jira.telefono,
      }
      
      let res = await axios.post(`https://bot-jira-api.herokuapp.com/manejador/createBot`, manejador, config);

      setQR(res.data);

      props.dispatch({ type: NEW_QR, payload: res.data });

    } catch (error) {
      console.log(error);
    }

  };



  return (
    <div className="container-component">

      <h1>Vincular con WhatsApp</h1>
      <div className="row row-qr">
        <div className="col-100">
          <p className="p-info-manejador"> <b>Si aún no ha vinculado ningún dispositivo: </b> <br/> <br/> Para poder vincular el número de teléfono al manejador de JIRA tienes que pulsar el botón de <b>* Generar QR *</b> y después escanear el código con tu aplicacion de WhatsApp en: <br /> <i>Dispositivos vinculados {'>'} Vincular un dispositivo</i> 
          </p>
          {/* Carga condicionar si ha QR */}
          {qr ? 
          <img className='img-qr-code mt-1' src={qr} /> :
          <>
          <div className='qr-code'>
           <p className="p-info-manejador"> *Puede tardar unos segundos en aparecer el código QR</p>
          </div>
          </> }
          
        </div>
      </div>
      <div className="row row-qr">
        <div className="col-100">
          <button className="send-button btn-qr" onClick={() => getQR()}>Generar QR</button>
        </div>
      </div>
      <div className="row row-qr">
        <div className="col-100">
          <p className="p-info-manejador"> <b>Aqui puedes comprobar si ya está vinculado: </b> <br/> <br/> Si ya está vinculado no se generará un nuevo QR hasta que no se cierre la sesión.</p>
          <img  className="img-info-manejador mb-2" src={img_wp} />
        </div>
      </div>
    </div>
  )
};

export default connect((state) => ({
  credentials: state.credentials,
  jiras: state.jiras,
  codigo: state.codigo
}))(Jira_QR);