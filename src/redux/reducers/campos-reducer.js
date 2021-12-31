import { NEW_CAMPO, DELETE_CAMPO, ALL_CAMPOS, UPDATE_CAMPO, SELECT_CAMPO } from '../types';

const initialState = {
    campos: '',
    select_campo: ''
};

const camposReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_CAMPO:
            return {
                ...state,
                campos: [action.payload, ...state.campos],
            };
        case ALL_CAMPOS:
            return {
                ...state,
                campos: action.payload,
            }
        case DELETE_CAMPO:
            return {
                ...state,
                campos: state.campos.filter(campo => campo.id !== action.payload)
            }
        case UPDATE_CAMPO:
            return {
                ...state,
                select_campo: '',
                campos: state.campos.map(campo => campo.id === action.payload.id ? action.payload : campo)
            }
        case SELECT_CAMPO:
            return {
                ...state,
                select_campo: action.payload,
            }
        default:
            return state
    }
}
export default camposReducer;