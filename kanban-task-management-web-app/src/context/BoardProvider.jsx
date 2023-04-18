import { useEffect, useReducer } from "react";
import { boardTypes } from "../actions";
import { boardReducer } from "../reducers";
import { BoardContext } from "./BoardContext";

const initialState = {
    boards: [],
    board: {}
};

export const BoardProvider = ({children}) => {

    const [boardState, dispatch] = useReducer(boardReducer, initialState);

    useEffect(() => {

        const getData = async () => {
            try {

                const request = await fetch('http://localhost:5000/boards');
                const response = await request.json();

                if(response) {
                    const action = {
                        type: boardTypes.getBoards,
                        payload: response
                    };
    
                    dispatch(action);
                }

            } catch (error) {
                console.log(error);
            }
        }

        getData();

    }, []);

    const createBoard = (board) => {
        const action = {
            type: boardTypes.createBoard,
            payload: board
        };

        dispatch(action);
    }

    const getOnlyBoard = (id) => {
        const action = {
            type: boardTypes.getOnlyBoard,
            payload: id
        };

        dispatch(action);
    }

    const addColumn = (column) => {
        const action = {
            type: boardTypes.addColumn,
            payload: column
        };

        dispatch(action);
    }

    const addTask = (task) => {
        const action = {
            type: boardTypes.addTask,
            payload: task
        };

        dispatch(action);
    }

    return (
        <BoardContext.Provider value={{ boardState, createBoard, getOnlyBoard, addColumn }}>
            {children}
        </BoardContext.Provider>
    )
}
