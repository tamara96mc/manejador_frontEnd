import React, { useState } from "react";

const CrearCliente = () => {

  const [formValues, setFormValues] = useState([{ name: "", email: "" }])

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  return (
    <div className="container">
      <form className="form-user" onSubmit={handleSubmit}>
        <h1 className="mb-3">Nuevo cliente</h1>
        <div className="row">
          <div className="col-40">
            <label> <i class="fa fa-user"></i>Nombre</label>
          </div>
          <div className="col-75">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre del cliente..." />
          </div>
        </div>
        <div className="row">
          <div className="col-40">
            <label> <i class="fa fa-whatsapp"></i>Teléfono</label>
          </div>
          <div className="col-75">
            <input type="text" id="nombre" name="nombre" placeholder="Teléfono del cliente..." />
          </div>
        </div>
        <div className="basics_row mt-5">
          <button className="send-button" type="submit">Crear cliente</button>
        </div>
      </form>
    </div>
  )
};
export default CrearCliente;