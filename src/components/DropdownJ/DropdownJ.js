import React, { useState } from "react";

const DropdownJ = () => {

  const [valor, setValor] = useState('');

  const options = [
    {
      label: "Jira SW",
      value: "jira sw",
    }

  ];


    return (
      <select className="Jnav-select">
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    )
  };

export default DropdownJ;