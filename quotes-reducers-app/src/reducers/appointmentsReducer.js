import { appointmentsTypes } from "../actions";

export const appointmentsReducer = (state = [], action) => {
  
    switch (action.type) {
        
        case appointmentsTypes.readAllAppointments:
            return {
                ...state,
                data: action.payload
            };
    
        default:
            return state;
    }

};