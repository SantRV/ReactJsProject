import * as actions$ from './todos.actions';
import * as service$ from '../service/todo.service';

export const displayAlert = (text: any) => () => {
    alert(text)
};

export const loadTodos = () => async(dispatch: any, getState: any) => {
    try {
        // Dispatch Action
        dispatch(actions$.loadTodosInProgress());
        // Get DB data
        const respose = await service$.getTodos();
        // Success message with data
        dispatch(actions$.loadTodosSuccess(respose));
    }
    catch (e) {
        dispatch(actions$.loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const addTodoRequest = (text: any) => async(dispatch: any, getState: any) => {
    try {
        const response = await service$.addTodos(text);;
        console.log(response)
        dispatch(actions$.createTodo(response))
    }
    catch (e) {
        dispatch(displayAlert(e));
    }
};

export const removeTodoRequest = (id: any) => async (dispatch: any) => {
    try{
        const response = await service$.deleteTodos(id);
        dispatch(actions$.removeTodo(response));
    }
    catch (e) {
        dispatch(displayAlert(e));
    }
};

export const markTodoCompleted = (id: any) => async (dispatch: any) => {
    try {
        const response = await service$.markTodosCompleted(id);
        console.log('RESPONSE', response)
        dispatch(actions$.markAsComplete(response))
    }
    catch (e) {
        dispatch(displayAlert(e));
    }
}