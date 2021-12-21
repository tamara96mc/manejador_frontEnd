import React, { useState } from "react";
import qr from '../../images/qr.png'

const Jira_info = () => {

  return (
    <div  className="container">
 
        <h1>Datos Jira</h1>
        <div  className="row row-qr">
          <div  className="col-50">
            <p>Para poder vincular el número de teléfono al manejador de JIRA tienes que pulsar el botón de <b>'Generar QR'</b> y después escanear el código con tu aplicacion de WhatsApp en: <br/> Dispositivos vinculados {'>'} Vincular un dispositivo </p>
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
          <button  className="nav-button btn-qr" onClick={() => {} }>Generar QR</button>
          </div>
        </div>
    </div>
  )
};
export default Jira_info;