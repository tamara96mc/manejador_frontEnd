import React, { useState } from "react";

const Jira_info = () => {

  return (
    <div  className="container">
      <form>
        <h1>Datos Jira</h1>
        <div  className="row">
          <div  className="col-25">
            <label >Nombre</label>
          </div>
          <div  className="col-75">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre de la instancia Jira.." />
          </div>
        </div>
        <div  className="row">
          <div  className="col-25">
            <label >Tipo</label>
          </div>
          <div  className="col-75">
            <select  className="tipo_jira"> 
              <option value="Jira Cloud">Jira Cloud</option>
              <option value="Jira Server">Jira Server</option>
              <option value="Jira Data Center">Jira Data Center</option>
            </select>
          </div>
        </div>
        <div  className="row">
          <div  className="col-25">
            <label >URL Base</label>
          </div>
          <div  className="col-75">
            <input type="text" id="url" name="url" placeholder="https://example.atlassian.net/jira" />
          </div>
        </div>
        <div  className="row">
          <div  className="col-25">
            <label >Usuario</label>
          </div>
          <div  className="col-75">
            <input type="text" id="usuario" name="usuario" placeholder="Usuario jira.." />
          </div>
        </div>

        <div  className="row">
          <div  className="col-25">
            <label >Contraseña</label>
          </div>
          <div  className="col-75">
            <input type="text" id="contraseya" name="contraseya" placeholder="Contraseña de usuario.." />
          </div>
        </div>


        <div  className="basics_row_space mt-3">
        <button  className="nav-button" onClick={() => {} }>Guardar</button>
        {/* <button  className="nav-button" onClick={() => {} }>Eliminar</button> */}
        </div>
      </form>
    </div>
  )
};
export default Jira_info;