import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
	save({ states: ["credentials" ,"clientes", "proyectos" , "campos" ,"jiras" , "codigo", "datos"] })
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load({ states: ["credentials" ,"clientes", "proyectos" , "campos", ,"jiras" , "codigo" ,"datos"] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
);

export default store;