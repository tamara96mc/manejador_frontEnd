import {LOGIN, LOGOUT, UPDATE_USER} from '../types';

const initialState = {
    token : '',
    user : {} 
};

const credentialsReducer = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de añadido de datos
        case LOGIN :
            return {
                token : action.payload.token,
                user : action.payload.user
            };

        //Ejemplo de reestablecimiento o borrado de datos
        case LOGOUT : 
            return initialState;
        
        case UPDATE_USER :
                return {...state, user: action.payload};
        default :
            return state
    }
}
export default credentialsReducer;