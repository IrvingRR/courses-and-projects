import { useEffect, useReducer } from "react";
import { appointmentsReducer } from "../reducers";
import { AppointmentsContext } from "./AppointmentsContext";
import { appointmentsTypes } from "../actions";
import { fetchHelper } from "../helpers";

const initialState = {
  data: []
};

export const AppointmentsProvider = ({ children }) => {


  const [appointmentsState, dispatch] = useReducer(appointmentsReducer, initialState);

    useEffect(() => {

        const fetchData = async () => {

          const response = await fetchHelper(`http://localhost:5000/appointments`);

          const action = {
              type: appointmentsTypes.readAllAppointments,
              payload: response
          };

          dispatch(action);

        }

        fetchData();

    }, []);

    const filterAppointments = async (filter, term) => {

        const url = (filter === 'All') ? `http://localhost:5000/appointments` : `http://localhost:5000/appointments?${term}=${filter}`;
        
        const response = await fetchHelper(url);

        const action = {
            type: appointmentsTypes.readAllAppointments,
            payload: response
        };

        dispatch(action);
    }

  return (
    <AppointmentsContext.Provider value={{ appointmentsState, filterAppointments }}>
        { children }
    </AppointmentsContext.Provider>
  )
}
