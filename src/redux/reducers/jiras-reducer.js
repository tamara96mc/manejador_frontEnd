import { NEW_JIRA, UPDATE_JIRA} from '../types';

const initialState = {
    jira: ''
};

const jiraReducer = (state = initialState, action) => {

    switch (action.type) {
        //Ejemplo de añadido de datos
        case NEW_JIRA:
            return {
                ...state,
                jira: action.payload,
            };
        case UPDATE_JIRA:
            return {
                ...state,
                jira: state.jira.map(jira => jira.id === action.payload.id ? action.payload : jira)
            }
        default:
            return state
    }
}
export default jiraReducer;