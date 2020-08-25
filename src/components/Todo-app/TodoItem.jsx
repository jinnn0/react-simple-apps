import React from 'react'

function TodoItem({todoItem, removeTodo}){
    const handleRemoveClick = () => {
        removeTodo(todoItem.id)
    }

    return (
        <li className="todo-item">
            <span className="check"><i className="far fa-check-circle check-icon"></i></span>
            <span className="todo">{todoItem.task}</span>
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
