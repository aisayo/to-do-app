import React, { Component } from 'react';
import TaskForm from './taskform'
import TaskButton from './taskbutton'

class Tasks extends Component {

    handleOnClick = (e) => {
        alert("clicked")
    }

    render() {
        return (
            <div>
                <TaskButton handleOnClick={this.handleOnClick} />
                <TaskForm />
            </div>
        )
    }
}

export default Tasks;