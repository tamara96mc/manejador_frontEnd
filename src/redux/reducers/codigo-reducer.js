import { NEW_QR} from '../types';

const initialState = {
    qr: ''
};

const codigoReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_QR:
            return {
                qr: action.payload,
            };
        default:
            return state
    }
}
export default codigoReducer;