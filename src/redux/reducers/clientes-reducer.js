import {NEW_CLIENTE, DELETE_CLIENTE ,ALL_CLIENTES} from '../types';

const initialState = {
    
    clientes: ''
};

const clientesReducer = (state = initialState, action) => {
    
    switch(action.type){
        //Ejemplo de añadido de datos
        case NEW_CLIENTE :
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
                    clientes: state.clientes.filter(cliente => cliente.telefono !== action.payload )
                }
            // case ACTUALIZAR_TAREA:
            //     return {
            //         ...state,
            //         tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea )
            //     }    
        default :
            return state
    }
}
export default clientesReducer;