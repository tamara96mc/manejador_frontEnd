import { NEW_PROYECTO, DELETE_PROYECTO, ALL_PROYECTOS, UPDATE_PROYECTO, NO_UPDATE_PROYECTO, SELECT_PROYECTO } from '../types';

const initialState = {

    proyectos: '',
    select_proyecto: ''
};

const proyectosReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_PROYECTO:
            return {
                ...state,
                proyectos: [action.payload, ...state.proyectos],
            };
        case ALL_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload,
            }
        case DELETE_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload)
            }
        case UPDATE_PROYECTO:
            return {
                ...state,
                select_proyecto: '',
                proyectos: state.proyectos.map(proyecto => proyecto.id === action.payload.id ? action.payload : proyecto)
            }
         case NO_UPDATE_PROYECTO:
            return {
                ...state,
                select_proyecto: ''
            }
        case SELECT_PROYECTO:
            return {
                ...state,
                select_proyecto: action.payload,
            }
        default:
            return state
    }
}
export default proyectosReducer;