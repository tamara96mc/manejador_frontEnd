import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import clientes from './clientes-reducer';
import proyectos from './proyectos-reducer';
import campos from './campos-reducer';
import jiras from './jiras-reducer';


const rootReducer = combineReducers({
    credentials,
    clientes,
    proyectos,
    campos,
    jiras
});

export default rootReducer;