const initialState = {
    isLoading: false,
    isLoggedIn: false
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return({
                ...state,
                isLoading: true
            });
        case "LOGIN_SUCCESS":
            return({
                ...state,
                isLoading: false,
                isLoggedIn: true
            });
        case "FAILED_LOGIN":
            return({
                ...state,
                isLoading: false
            })
        case "VERIFY_LOGIN":
            return {
                ...state,
                isLoggedIn: true
            };
        case 'LOGOUT':
            return ({
                ...state,
                isLoggedIn: false
            })
        default:
            return state
    }
}

export default auth