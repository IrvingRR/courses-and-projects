import { useEffect, useReducer, useState } from "react";
import { appointmentsTypes } from "../actions";
import { appointmentsReducer } from "../reducers/";
import { useFetch } from "./useFetch";

const initialState = {
    total: 0,
    data: []
};

export const useAppointments = () => {

    const [appointmentsState, dispatch] = useReducer(appointmentsReducer, initialState);

    useEffect(() => {

        const fetchData = async () => {
            
            try {
                const request = await fetch(`http://localhost:5000/appointments`);
                const response = await request.json();

                const action = {
                    type: appointmentsTypes.readAllAppointments,
                    payload: response
                };

                dispatch(action);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    const filterAppointments = async (filter) => {

        const url = (filter === 'All') ? `http://localhost:5000/appointments` : `http://localhost:5000/appointments?status=${filter}`;
        try {
            const request = await fetch(url);
            const response = await request.json();

            const action = {
                type: appointmentsTypes.readAllAppointments,
                payload: response
            };

            dispatch(action);

        } catch (error) {
            console.log(error);
        }
    }

    return {
        appointmentsState,
        filterAppointments
    };

}