import { NEW_CLIENTE, DELETE_CLIENTE, ALL_CLIENTES, UPDATE_CLIENTE, SELECT_CLIENTE } from '../types';

const initialState = {

    clientes: '',
    select_cliente: ''
};

const clientesReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_CLIENTE:
            return {
                ...state,
                clientes: [action.payload, ...state.clientes],
            };
        case ALL_CLIENTES:
            return {
                ...state,
                clientes: action.payload,
            }
        case DELETE_CLIENTE:
            return {
                ...state,
                clientes: state.clientes.filter(cliente => cliente.telefono !== action.payload)
            }
        case UPDATE_CLIENTE:
            return {
                ...state,
                clientes: state.clientes.map(cliente => cliente.telefono === action.payload.telefono ? action.payload : cliente)
            }
        case SELECT_CLIENTE:
            return {
                ...state,
                select_cliente: action.payload,
            }
        default:
            return state
    }
}
export default clientesReducer;