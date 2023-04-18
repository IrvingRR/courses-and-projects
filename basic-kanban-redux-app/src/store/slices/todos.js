import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
   name: 'todo',
   initialState: {
        todos: [],
        isLoading: false
   },
   reducers: {

        startLoadingTodos: (state) => {
            state.isLoading = true
        },

        loadTodos: (state, action) => {
            state.isLoading = false,
            state.todos = action.payload;
        },

        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        updateTodo: (state, action) => {
            // console.log(action.payload.data)
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? todo = action.payload.data : todo);
        }

   }
});


// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo, startLoadingTodos, loadTodos } = todoSlice.actions;