import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  
  const [values, setValues] = useState({name: "",email: "", password: "", rol: "user"});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    console.log( 'errors' +Object.keys(errors) + ' errores: ' + Object.keys(errors).length );
    
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors
  };
};

export default useForm;