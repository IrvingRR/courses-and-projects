import { types } from "../types/auth";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                token: action.payload.token,
                user: action.payload.user
            };

        case types.logout:
            return {
                logged: false,
                token: ''
            }
                
        default:
            return state;
    }

}