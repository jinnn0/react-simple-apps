import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItems from './TodoItems.jsx';

const localStorageKey = "todo items"

function Todo() {
    const [todoLists, setTodoLists] = useState([])

    useEffect(()=>{
        const storageTodoLists = JSON.parse(localStorage.getItem(localStorageKey))
        if(storageTodoLists) {
            setTodoLists(storageTodoLists)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(localStorageKey, JSON.stringify(todoLists))
    }, [todoLists])

    const addTodo = (todoItem) => {
        setTodoLists([...todoLists, todoItem])
    }

    const removeTodo = (id) => {
        setTodoLists(todoLists.filter(todoItem => todoItem.id !== id))
    }

    const toggleComplete = (id) => {
        let completUpdated = todoLists.map(todoItem => {
            if(todoItem.id === id) {
                return {
                    ...todoItem,
                    completed: !todoItem.completed
                }
            }

            return todoItem
        })

        setTodoLists(completUpdated)
    }

    return (
        <div className="todo-app app-container">
            <div className="app">
                <div className="title">
                    <i className="far fa-clipboard todo-icon"></i>
                    Todo
                </div>

                <TodoForm addTodo={addTodo}/>
                <TodoItems
                    todoLists={todoLists}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            </div>
        </div>
    )
}

export default Todo