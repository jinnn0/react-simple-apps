import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [todoItem, setTodoItem] = useState({
        id: undefined,
        task: "",
        completed: false
    })

    const handleInput = (e) => {
        setTodoItem({...todoItem, task: e.target.value})
    }

    const handleSubmit = (e)  => {
        e.preventDefault()
        if(todoItem.task.trim()){
            addTodo({...todoItem,  id: Date.now()})
            setTodoItem({...todoItem, task: ""})
        }
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
