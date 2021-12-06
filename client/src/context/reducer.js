import { SET_IS_TODAY, SET_QUOTE, SET_USER, SET_TODOS, SET_DARK_THEME, SET_FILTER } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return { ...state, quote: action.payload };
        case SET_TODOS:
            return { ...state, todos: action.payload };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_IS_TODAY:
            return { ...state, isToday: action.payload };
        case SET_DARK_THEME:
            return { ...state, darkTheme: action.payload };
        case SET_USER:
            return { ...state, isLoading: false, user: action.payload };
        default:
            return state;
    }
}

export default reducer;