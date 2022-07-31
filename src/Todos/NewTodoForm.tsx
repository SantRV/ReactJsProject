import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from './state/todos.actions'
import * as effects from './state/todos.effects';
import './NewTodoForm.scss'
type Props = {
    todos: Array<object>,
    onCreatePressed: Function
};

export const NewTodoForm: React.FC<Props> = ({ todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                type="text" 
                className="new-todo-input"
                placeholder="Type your new todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button 
                onClick={() => {
                    const isDuplicateText = todos.some((todo: any) => todo.text === inputValue )
                    if(!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('')
                    }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch: any) => ({
    onCreatePressed: (text: any) => dispatch(effects.addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
