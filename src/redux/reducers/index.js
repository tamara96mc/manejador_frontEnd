import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import clientes from './clientes-reducer';


const rootReducer = combineReducers({
    credentials,
    clientes
});

export default rootReducer;