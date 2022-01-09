import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import clientes from './clientes-reducer';
import proyectos from './proyectos-reducer';
import campos from './campos-reducer';
import jiras from './jiras-reducer';
import codigo from './codigo-reducer';
import datos from './datos-reducer';


const rootReducer = combineReducers({
    credentials,
    clientes,
    proyectos,
    campos,
    jiras,
    codigo,
    datos
});

export default rootReducer;