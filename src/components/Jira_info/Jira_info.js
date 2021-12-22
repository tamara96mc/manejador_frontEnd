import React, { useState } from "react";

const Jira_info = () => {

  return (
    <div  className="container-component">
      <h1>Datos de conexión a Jira</h1>
      <form className="form-datos-jira">
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fab fa-jira"></i>Nombre</label>
          </div>
          <div  className="col-60">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre de la instancia Jira.." />
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-server"></i>Tipo</label>
          </div>
          <div  className="col-60">
            <select  className="tipo_jira"> 
              <option value="Jira Cloud">Jira Cloud</option>
              <option value="Jira Server">Jira Server</option>
              <option value="Jira Data Center">Jira Data Center</option>
            </select>
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-link"></i>URL Base</label>
          </div>
          <div  className="col-60">
            <input type="text" id="url" name="url" placeholder="https://example.atlassian.net/jira" />
          </div>
        </div>
        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-user"></i>Usuario</label>
          </div>
          <div  className="col-60">
            <input type="text" id="usuario" name="usuario" placeholder="Usuario jira.." />
          </div>
        </div>

        <div  className="row">
          <div  className="col-40">
            <label> <i class="fa fa-key"></i>Contraseña</label>
          </div>
          <div  className="col-60">
            <input type="text" id="contraseya" name="contraseya" placeholder="Contraseña de usuario.." />
          </div>
        </div>


        <div  className="mt-3 basics_row">
        <button  className="send-button btn-jira" onClick={() => {} }>Guardar</button>
        {/* <button  className="nav-button" onClick={() => {} }>Eliminar</button> */}
        </div>
      </form>
    </div>
  )
};
export default Jira_info;