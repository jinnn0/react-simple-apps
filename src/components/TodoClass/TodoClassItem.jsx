import React from 'react'

function TaskItems ({todo, completeTodo, handleComplet, removeTodo }) {
    handleComplet = () => {
        completeTodo(todo.id)
    }

        return (
            <ul className="todo-items">
              <li className="todo-item" >
                <span className="check">
                    <i className={
                        "far fa-check-circle check-icon " +
                        (todo.completed ?  "completed" : "")
                    }
                        onClick={handleComplet}
                    ></i>
                </span>

                <span className="task">{todo.task}</span>
                <span className="trash">
                    <i
                    className="fas fa-trash-alt trash-icon"
                    onClick={removeTodo}
                    >
                </i>
                </span>
              </li>
            </ul>
        )
}

export default TaskItems