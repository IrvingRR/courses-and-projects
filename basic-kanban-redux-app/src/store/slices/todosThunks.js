import { loadTodos, startLoadingTodos, addTodo, deleteTodo, updateTodo } from "./todos";

export const getTodos = () => {

    return async (dispatch, getState) => {
        dispatch(startLoadingTodos());

        try {
            
            const request = await fetch('http://localhost:5000/todos');
            const response = await request.json();
            
            dispatch(loadTodos(response));

        } catch (error) {
            console.log(error);
        }
    };

};

export const createTodo = (data) => {

    return async (dispatch, getState) => {

        try {
            
            const request = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const response = await request.json();
            
            dispatch(addTodo(response));

        } catch (error) {
            console.log(error);
        }
    };

    

};

export const deleteTodoById = (id) => {

    return async (dispatch, getState) => {

        try {
            
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });
            
            dispatch(deleteTodo(id));

        } catch (error) {
            console.log(error);
        }
    };

    

};

export const updateTodoById = (id, data) => {

    return async (dispatch, getState) => {

        try {
            
            const request = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const response = await request.json();
            
            dispatch(updateTodo({ id, data }));

        } catch (error) {
            console.log(error);
        }
      
    };

    

};