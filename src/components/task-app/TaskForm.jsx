import React from  'react'


class TaskForm extends React.Component {
    state = {
        todo: {
            task: ""
           }
    }

    handleChange = (e) => {
        this.setState({todo: { task: e.target.value}})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newTodo =  {
                        ...this.state.todo,
                         id: Date.now(),
                         completed: false
                        }
        this.props.addTodo(newTodo)
        this.setState({todo: {task: "" }})
    }

    render(){
        return (
            <form  className="add-todo" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="new todo.."
                    value={this.state.todo.task}
                    onChange={this.handleChange}
                />
                 <button className="add">
                     <i className="fas fa-plus-circle add-icon"></i>
                 </button>
           </form>
        )
    }
}

export default TaskForm