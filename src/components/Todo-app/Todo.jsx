import React from 'react';
import TodoItem from './TodoItem.jsx';

function Todo() {
    return (
        <div className="todo-app app-container">
            <div className="app">
                <div className="title">
                    <i class="far fa-clipboard todo-icon"></i>
                    Todo
                </div>

                <form className="add-todo" action="">
                    <input type="text" placeholder="add new todo"/>
                    <button className="add">
                      <i class="fas fa-plus-circle add-icon"></i>
                    </button>
                </form>

                <div className="todos">
                    <ul className="todo-items">
                        <TodoItem/>
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default Todo