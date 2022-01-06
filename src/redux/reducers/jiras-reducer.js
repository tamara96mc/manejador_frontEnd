import { NEW_JIRA, UPDATE_JIRA } from '../types';

const initialState = {
    jira: ''
};

const jiraReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_JIRA:
        case UPDATE_JIRA:
            return {
                ...state,
                jira: action.payload,
            };
        default:
            return state
    }
}
export default jiraReducer;