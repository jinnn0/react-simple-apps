import React from 'react'

function TodoItem({todoItem, removeTodo, toggleComplete}){
    const handleRemoveClick = () => {
        removeTodo(todoItem.id)
    }

    const handleToggleComplete = () => {
        toggleComplete(todoItem.id)
    }

    return (
        <li className="todo-item">
            <span className="check">
                <i className={"far fa-check-circle check-icon " + (todoItem.completed ?  "completed" : "")}
                    onClick={handleToggleComplete}
                ></i>
            </span>
            <span className="task">{todoItem.task}</span>
            <span className="trash">
                <i
                 className="fas fa-trash-alt trash-icon"
                 onClick={handleRemoveClick}
                >
               </i>
            </span>
        </li>
    )
}

export default TodoItem
