import React, { Component } from 'react';
import TaskForm from './taskform'


class Task extends Component {


    handleOnClick = (e) => {
        alert("clicked")
    }

    render() {
        return (
            <div>
                <button className="TaskCard" 
                    onClick={this.handleOnClick}>
                    Task
                </button>
                <div>
                    <TaskForm />
                </div>
            </div>
            
        )
    }
}

export default Task;