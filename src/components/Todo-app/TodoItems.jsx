import React from 'react'
import TodoItem from './TodoItem.jsx'

function TodoItems({todoLists, removeTodo, toggleComplete}) {
    return (
        <ul className="todo-items">
            {todoLists.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    todoItem={todoItem}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    )
}

export default TodoItems
