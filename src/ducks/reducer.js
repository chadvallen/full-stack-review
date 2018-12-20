const INITIAL_STATE = {
    user: null

};

const USER_LOGIN = 'USER_LOGIN';

export function userLogin(user) {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case USER_LOGIN:
            return {...state, user: action.payload};
        default:
            return state;
    }
}

export default reducer;