import React from 'react'
import TaskItems from './TaskItems';
import TaskForm from './TaskForm';
import TaskController from './TaskController';

class TaskApp extends React.Component{
    state = {
        todos: [],
        todosToShow : "all"
    }

    componentDidMount(){
        const sotredTodos = JSON.parse(localStorage.getItem('todos'))
        if(sotredTodos){
            this.setState({todos: sotredTodos})
        }
    }

    updateLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    addTodo = async (newTodo) => {
       await this.setState({todos: [...this.state.todos, newTodo]})
       this.updateLocalStorage()
    }

    removeTodo = async (id) => {
        await this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
        this.updateLocalStorage()
    }

    completeTodo = async (id) => {
        const updatedTodo = this.state.todos.map(todo=>{
            if(todo.id === id) {
                return {
                    ...todo,
                    completed : !todo.completed
                }
            }

            return todo
        })

       await this.setState({todos: updatedTodo})
       this.updateLocalStorage()
    }

    handleDeleteAll = () => {
        this.setState({todos: []})
    }

    handleShowActive = () => {
        const activeTodos = this.state.todos.filter(todo => !todo.cpmpleted)
        this.setState({todos: activeTodos})
    }

    handleAllComplete = () => {
        const updatedTodos = this.state.todos.map(todo => {
            if(!todo.completed) {
                return {
                    ...todo,
                    completed : true
                }
            }

            return todo
        })

        this.setState({todos: updatedTodos})
    }

    handleTodosToShow = (value) => {
      this.setState({todosToShow: value})
    }

    handleDeleteAllCompleted = () => {
        this.setState({todos : this.state.todos.filter(todo => !todo.completed)})
    }


    render(){
        let todos = this.state.todos.filter(todo => {
            if(this.state.todosToShow === "all"){
                return todo
            } else if(this.state.todosToShow === "active") {
                return !todo.completed
            } else if(this.state.todosToShow === "completed") {
                return todo.completed
            }

            return todo
        })

        return (
            <div className="todo-app task-app app-container">
                <h1 className="app-title">Class component todo app</h1>

                <div className="container">
                    <div className="app">
                        <div className="title">
                            <i className="far fa-clipboard todo-icon"></i>
                            Task Manager
                        </div>

                        <TaskForm addTodo={this.addTodo} />

                        {todos.map(todo =>
                            <TaskItems
                                todo={todo}
                                key={todo.id}
                                completeTodo={this.completeTodo}
                                removeTodo={()=>this.removeTodo(todo.id)}
                        />)}
                    </div>

                    <TaskController
                        todos={this.state.todos}
                        handleTodosToShow={this.handleTodosToShow}
                        handleDeleteAllCompleted={this.handleDeleteAllCompleted}
                    />
               </div>
            </div>
        )
    }
}

export default TaskApp