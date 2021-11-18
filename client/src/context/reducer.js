import { LOGIN, LOGOUT, SIGN_UP, CREATE_TODO, UPDATE_TODO, DELETE_TODO, GET_ALL_TODOS, GET_TODAY_TODOS } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state };
        case LOGOUT:
            return { ...state };
        case SIGN_UP:
            return { ...state };
        case CREATE_TODO:
            return { ...state };
        case UPDATE_TODO:
            return { ...state };
        case DELETE_TODO:
            return { ...state };
        case GET_ALL_TODOS:
            return { ...state };
        case GET_TODAY_TODOS:
            return { ...state };
        default:
            throw new Error(`No Matching Action ${action.type}`);
    }
}

export default reducer;