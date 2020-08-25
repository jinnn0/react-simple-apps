import React from 'react'

function TodoForm({todoItem}) {
    const handleInput = (e) => {
        setTodoItem({...todoItem, id: Date.now(), task: e.target.value})
    }

    const handleSubmit = (e)  => {
        e.preventDefault()
        setTodoLists([...todoLists, todoItem])
        setTodoItem({...todoItem, task: ""})
        console.log("submit todo");
    }

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="add new todo"
                onChange={handleInput}
                value={todoItem.task}
            />
            <button className="add">
            <i className="fas fa-plus-circle add-icon"></i>
            </button>
        </form>
    )
}

export default TodoForm
