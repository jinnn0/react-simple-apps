import React from 'react'

function TaskController({todos, handleTodosToShow, handleDeleteAllCompleted}) {

        return (
          <div className="controllers">
            <button className="btn" onClick={()=> handleTodosToShow("all")}>all todos</button>
            <button className="btn" onClick={()=> handleTodosToShow("active")}>active todos</button>
            <button className="btn" onClick={()=> handleTodosToShow("completed")}>completed todos</button>

            {todos.some(todo => todo.completed) ? (
                <button className="btn" onClick={handleDeleteAllCompleted}>
                    delete all completed todos
                </button>
            ) : null
            }

            <div className="btn">todos left: {todos.filter(todo => !todo.completed).length}</div>
         </div>
        )
}

export default TaskController
