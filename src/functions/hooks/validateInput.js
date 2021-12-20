export function validateLogin(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Complete este campo";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El correo no es valido";
    }
    if (!values.password) {
      errors.password = "Complete este campo";
    } else if (values.password.length < 6) {
      errors.password = "La contreseña debe de tener al menos 6 caracteres";
    }
    return errors;
  }


  export function validateSignUp(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Complete este campo";
    }
    if (!values.email) {
      errors.email = "Complete este campo";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El correo no es valido";
    }
    if (!values.password) {
      errors.password = "Complete este campo";
    } else if (values.password.length < 8) {
      errors.password = "La contreseña debe de tener al menos 8 caracteres";
    }
    if (!values.rol) {
      errors.rol = "Complete este campo";
    }

    return errors;
  }