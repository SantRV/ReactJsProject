// Action Types
export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';


// Action Creators
export const createTodo = (todo: any) => ({
    type: CREATE_TODO,
    payload: { todo }
});

export const removeTodo = (todo: any) => ({
    type: REMOVE_TODO,
    payload: { todo }
});

export const markAsComplete = (todo: any) => ({
    type: MARK_AS_COMPLETE,
    payload: { todo }
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos: any) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE
});

export const TEST = 'TEST';
export const updateTest = (text: any) => ({
    type: TEST,
    payload: text
});