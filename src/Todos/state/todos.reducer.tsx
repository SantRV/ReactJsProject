import * as actions$ from './todos.actions';

export const initialState = {
    todos: [],
    loading: false,
    test: 'santiago'
};

export const test = (state = initialState.test, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case actions$.TEST:
            const text = payload;
            return text
        default:
            return state;
    }
}

export const isLoading = (state = initialState.loading, action: any) => {
    const { type } = action;

    switch (type) {
        case actions$.LOAD_TODOS_IN_PROGRESS:
            return true;
        case actions$.LOAD_TODOS_SUCCESS:
        case actions$.LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const todos = (state = initialState.todos, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case actions$.CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo)
        }
        case actions$.REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return state.filter((todo: any) => todo.id !== todoToRemove.id);
        }
        case actions$.MARK_AS_COMPLETE: {
            const { todo } = payload;
            return state.map((td: any) => {
                if(td.id === todo.id) {
                    return {
                        ...todo
                    };
                }
                return td;
            })
        }
        case actions$.LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case actions$.LOAD_TODOS_IN_PROGRESS:
        case actions$.LOAD_TODOS_FAILURE:
        default: {
            return state
        }
        
    }
}

