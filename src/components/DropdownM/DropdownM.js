import React, { useState } from "react";

const DropdownM = () => {

  const [valor, setValor] = useState('');

  const options = [
    {
      label: "Manejador",
      value: "manejador",
    },
    {
      label: "Clientes",
      value: "clientes",
    },
    {
      label: "Proyectos",
      value: "proyectos",
    },
    {
      label: "Campos",
      value: "campos",
    }
    // ,
    // {
    //   label: "Contextos",
    //   value: "Contextos",
    // },
    // {
    //   label: "Mensajes",
    //   value: "Mensajes",
    // },
  ];


    return (
      <select className="Mnav-select">
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    )
  };

export default DropdownM;