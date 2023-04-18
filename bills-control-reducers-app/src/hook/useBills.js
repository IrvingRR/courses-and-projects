import { useReducer } from "react";
import { billsReducer } from "../reducers/billsReducer";

export const useBills = () => {

    const [bills, dispatch] = useReducer(billsReducer, []);

    const onAddBill = (bill) => {
        const action = {
            type: '[BILLS] - add bill',
            payload: bill
        }

        dispatch(action);
    };

    const onRemoveBill = (id) => {
        const action = {
            type: '[BILLS] - remove bill',
            payload: id
        }

        dispatch(action);
    }

    const onChangeAmount = (id, amount) => {
        const action = {
            type: '[BILLS] - change amount',
            payload: { id, amount }
        }

        dispatch(action);
    }

    return {
        bills, 
        onAddBill,
        onRemoveBill,
        onChangeAmount
    };

};