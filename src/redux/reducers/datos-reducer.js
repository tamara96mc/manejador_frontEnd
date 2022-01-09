import { NEW_DATO, DELETE_DATO, ALL_DATOS, UPDATE_DATO, NO_UPDATE_DATO, SELECT_DATO } from '../types';

const initialState = {
    datos: '',
    select_dato: ''
};

const datosReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_DATO:
            return {
                ...state,
                datos: [action.payload, ...state.datos],
            };
        case ALL_DATOS:
            return {
                ...state,
                datos: action.payload,
            }
        case DELETE_DATO:
            return {
                ...state,
                datos: state.datos.filter(dato => dato.id !== action.payload)
            }
        case UPDATE_DATO:
            return {
                ...state,
                select_dato: '',
                datos: state.datos.map(dato => dato.id === action.payload.id ? action.payload : dato)
            }
        case NO_UPDATE_DATO:
            return {
                ...state,
                select_dato: ''
            }
        case SELECT_DATO:
            return {
                ...state,
                select_dato: action.payload,
            }
        default:
            return state
    }
}
export default datosReducer;