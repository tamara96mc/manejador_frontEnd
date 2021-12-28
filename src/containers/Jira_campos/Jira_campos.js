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
          <h1 className="mb-4 mt-3">Campos personalizados de Jira</h1>
         <form className="form-campos" onSubmit={handleSubmit}>
         <p className="p-info-campos">En esta pantalla podemos configurar los campos personalidos de Jira, <br/> los cuales pueden ser utilizados en los clientes para añadir más información al ticket en su creación.<br/> En la caja izquierda ponemos el indetificador del campo en Jira y en la otra el nombre del campo. </p>
          
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
          <button className="send-button btn-campos" type="button" onClick={() => addFormFields()}>Añadir campo</button>
    </form>
    
        <div className="basics_row_space mt-5">
        
          <button className="send-button btn-campos-guardar" type="submit">Guardar</button>
        </div>
      
    </div>

  )
};
export default DetallesCliente;