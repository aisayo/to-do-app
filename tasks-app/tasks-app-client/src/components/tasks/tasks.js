import React, { PureComponent } from 'react';
import TaskForm from './taskform'
import TaskButton from './taskbutton'

class Tasks extends PureComponent {
    
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

    handleOnClick = (e) => {
        alert("clicked")
    }

    render() {
        return (
            <div>
                <TaskButton handleOnClick={this.handleOnClick} />
                <TaskForm 
                    task={this.state.task}
                    completed={this.state.completed}
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                    />
            </div>
        )
    }
}

export default Tasks;