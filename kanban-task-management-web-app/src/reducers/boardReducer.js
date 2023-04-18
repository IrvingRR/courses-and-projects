import { boardTypes } from "../actions";

export const boardReducer = (state, action) => {

    switch (action.type) {

        case boardTypes.getBoards:
            return {
                ...state,
                boards: action.payload
            };
        
        case boardTypes.getOnlyBoard:
            return {
                ...state,
                board: state.boards.find(board => board.id === action.payload)
            }

        case boardTypes.createBoard:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            }

        case boardTypes.addColumn:
            return {
                ...state,
                board: {
                    ...state.board, 
                    columns: [...state.board.columns, action.payload]
                }
            }

        case boardTypes.addTask:
            return {
                ...state,
                board: {
                    ...state.board,
                    tasks: [...state.board.tasks, action.payload]
                }
            }

        case boardTypes.deleteBoard:
            return console.log('Delete board');
    
        default:
            return state;

    }

};