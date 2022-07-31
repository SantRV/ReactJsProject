import React from "react";
import './TodoListItem.scss'

type Props = {
    test: string, 
    todo: any,
    onRemovePressed: Function, 
    onUpdateMarkedPressed: Function
};

export const TodoListItem: React.FC<Props> = ({ test, todo, onRemovePressed, onUpdateMarkedPressed }) => {
    return <div className="todo-item-container">
        <p>
            {test}
        </p>
        <h3>
            {todo.text}
        </h3>
        <div className="buttons-container">
            {todo.isCompleted ?
                null :
                <button
                    onClick={() => onUpdateMarkedPressed(todo.id)}
                    className="completed-button">
                    Mark As Complete
                </button>}
            <button
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">
                Remove
            </button>
        </div>

    </div>;
};


export default TodoListItem;
