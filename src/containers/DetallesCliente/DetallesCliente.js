import React, { useState } from "react";

const DetallesCliente = () => {

  const [formValues, setFormValues] = useState([{ name: "", email: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  return (
    <div className="container container-campos">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-2 mt-3">Datos cliente</h1>
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
            <label> <i class="fa fa-whatsapp"></i>Telefono</label>
          </div>
          <div className="col-75">
            <input type="text" id="nombre" name="nombre" placeholder="Teléfono del cliente..." />
          </div>
        </div>


<div className="form-campos-personalizados">
<h2 className="mb-2">Campos personalizados</h2>
        {formValues.map((element, index) => (
          <div className="row" key={index}>
            <div className="col-40">
              <select className="select-campo-jira" value={element.name || ""} onChange={e => handleChange(index, e)}>
                <option value="Jira Cloud">Empresa</option>
                <option value="Jira Server">Módulo</option>
                <option value="Jira Data Center">Correo</option>
              </select>
            </div>
            <div className="col-50">
              <input type="text" id="nombre" name="nombre" placeholder="Valor del campo" value={element.email || ""} onChange={e => handleChange(index, e)} />
              
            </div>

            <div className="col-10">
            {
              index ?
                <button type="button" className="send-button btn-remove" onClick={() => removeFormFields(index)}>X</button>
                : null
            }
            </div> 
          </div>
        ))}
        <div className="">
        <button className="send-button btn-campos-personalizados" type="button" onClick={() => addFormFields()}>Añadir campo</button>
       </div> 
       </div> 
        <div className="basics_row mt-2 mb-2">
          
          <button className="send-button btn-campos-guardar " type="submit">Crear</button>
        </div>
      </form>
    </div>
  )
};
export default DetallesCliente;