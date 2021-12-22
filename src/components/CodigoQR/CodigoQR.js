import React, { useState } from "react";
import qr from '../../images/qr.png'

const Jira_info = () => {

  return (
    <div  className="container-component">
 
        <h1>Vincular con WhatsApp</h1>
        <div  className="row row-qr">
          <div  className="col-50">
            <p className="p-info-manejador">Para poder vincular el número de teléfono al manejador de JIRA tienes que pulsar el botón de <b>'Generar QR'</b> y después escanear el código con tu aplicacion de WhatsApp en: <br/> <i>Dispositivos vinculados {'>'} Vincular un dispositivo</i> </p>
            <div className="basics_row">
            <label >Teléfono</label>
            <input type="text" id="telefono" name="telefono" placeholder="645 234 567" />
            </div>
            
          </div>
          <div  className="col-50 card-img">
          <img className='img-qr' src={qr} />
          </div>
        </div>
        <div  className="row row-qr">
          <div  className="col-100">
          <button  className="send-button btn-qr" onClick={() => {} }>Generar QR</button>
          </div>
        </div>
    </div>
  )
};
export default Jira_info;