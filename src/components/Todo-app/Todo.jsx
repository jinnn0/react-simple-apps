import React, {useEffect, useState} from 'react';
import TodoItem from './TodoItem.jsx';

const localStorageKey = "todo items"

function Todo() {
    const [todoLists, setTodoLists] = useState([])
    const [todoItem, setTodoItem] = useState({
        id: undefined,
        task: "",
        completed: false
    })

    useEffect(()=>{
        setTodoLists(JSON.parse(localStorage.getItem(localStorageKey)))
    },[])

    useEffect(()=>{
        localStorage.setItem(localStorageKey, JSON.stringify(todoLists))
    }, [todoLists])

    const handleInput = (e) => {
        setTodoItem({...todoItem, id: Date.now(), task: e.target.value})
    }

    const handleSubmit = (e)  => {
        e.preventDefault()
        setTodoLists([...todoLists, todoItem])
        setTodoItem({...todoItem, task: ""})
        console.log("submit todo");
    }

    const removeTodo = (id) => {
        setTodoLists(todoLists.filter(todoItem => todoItem.id !== id))
    }

    return (
        <div className="todo-app app-container">
            <div className="app">
                <div className="title">
                    <i className="far fa-clipboard todo-icon"></i>
                    Todo
                </div>

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

                <div className="todos">
                    <ul className="todo-items">
                        {todoLists.map(todoItem => (
                            <TodoItem
                                key={todoItem.id}
                                todoItem={todoItem}
                                removeTodo={removeTodo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo