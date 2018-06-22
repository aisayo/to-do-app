import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(){
        super();

        this.state = {
            task: '',
            completed: false,
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.setState({
            task: this.state.task

        })
        console.log(this.state.task)
    }
    
    render() {
        return (
            <div>
            <h3>Create a New Task</h3>
            <form className="TaskForm" onSubmit={(event) => this.handleOnSubmit(event)}>
                <label htmlFor="task" className="TaskLabel">Task:</label>
                <input 
                    className="TaskInput"
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={(event) => this.handleOnChange(event)}

                />

                < input type="submit" />

            </form>
        </div>
        )
    }
}

export default TaskForm;

