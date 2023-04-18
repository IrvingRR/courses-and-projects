import { sessionTypes } from "../actions/session";

export const sessionReducer = (state, action) => {

    switch (action.type) {
        
        case sessionTypes.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case sessionTypes.logout:
            return {
                logged: false,
                user: null
            };

        default:
            return state;
    }

};