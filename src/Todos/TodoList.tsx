import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import * as effects$ from './state/todos.effects';
import { Outlet, Link } from "react-router-dom";
import './TodoList.scss'

type Props = {
    test: string,
    isLoading: boolean, 
    todos: Array<object>,
    onRemovePressed: Function,
    onUpdateMarkedPressed: Function, 
    onDisplayAlertClicked: Function, 
    startLoadingTodos: Function 
}

export const TodoList: React.FC<Props> = ({ test, todos = [], onRemovePressed, onUpdateMarkedPressed, onDisplayAlertClicked, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    const loadingMessage = <div>Loading...</div>;
    const content = (
        
        <div className="list-wrapper">
            <div>
                <Link to="/blogs">
                    Test
                </Link>
            </div>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <NewTodoForm />

            { todos.map((todo, i) => <TodoListItem 
                test = {test}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onUpdateMarkedPressed={onUpdateMarkedPressed}  
                key={i}/>
            )}

        </div>
    );
    return isLoading ? loadingMessage : content;
};

export const mapStateToProps = (state: any) => ({
    todos: state.todos,
    isLoading: state.isLoading,
    test: state.test
});

export const mapDispatchToProps = (dispatch: any) => ({
    onRemovePressed: (id: any) => dispatch(effects$.removeTodoRequest(id)),
    onUpdateMarkedPressed: (id: any) => dispatch(effects$.markTodoCompleted(id)),
    onDisplayAlertClicked: () => dispatch(effects$.displayAlert('SANTIAGO HERE')),
    startLoadingTodos: () => dispatch(effects$.loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
