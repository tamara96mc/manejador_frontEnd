export function validateLogin(values) {
    let errors = {};
    if (!values.correo) {
      errors.correo = "Complete este campo";
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
      errors.correo = "El correo no es valido";
    }
    if (!values.contraseya) {
      errors.contraseya = "Complete este campo";
    } else if (values.contraseya.length < 8) {
      errors.contraseya = "La contreseña debe de tener al menos 6 caracteres";
    }
    return errors;
  }


  export function validateSignUp(values) {
    let errors = {};
    if (!values.nombre) {
      errors.nombre = "Complete este campo";
    }
    if (!values.correo) {
      errors.correo = "Complete este campo";
    } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
      errors.correo = "El correo no es valido";
    }
    if (!values.contraseya) {
      errors.contraseya = "Complete este campo";
    } else if (values.contraseya.length < 8) {
      errors.contraseya = "La contreseña debe de tener al menos 8 caracteres";
    }else if (!/[A-Z]/.test(values.contraseya)) {
      errors.contraseya = "La contreseña debe de tener al menos una mayúscula";
    }else if (!/[a-z]/.test(values.contraseya)) {
      errors.contraseya = "La contreseña debe de tener al menos una minúscula";
    }else if (!/[0-9]/.test(values.contraseya)) {
      errors.contraseya = "La contreseña debe de tener al menos un número";
    }

    return errors;
  }

