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
    <div className="container">
     
        <div >
          <h1 className="mb-1">Campos personalizados</h1>
          <form className="form-campos" onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="row row-campos" key={index}>
              <div className="col-40">
              <input type="text" id="id" name="id" placeholder="ID del campo" value={element.email || ""} onChange={e => handleChange(index, e)} />
              </div>
              <span></span>
              <div className="col-50">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre del campo" value={element.email || ""} onChange={e => handleChange(index, e)} />

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
    </form>
        </div>
        <div className="basics_row_space ">
        <button className="send-button btn-campos" type="button" onClick={() => addFormFields()}>Añadir campo</button>
          <button className="send-button btn-campos" type="submit">Guardar</button>
        </div>
      
    </div>

  )
};
export default DetallesCliente;