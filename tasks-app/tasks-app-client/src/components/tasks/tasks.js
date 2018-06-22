import React, { Component } from 'react';
import TaskForm from './taskform'
import TaskButton from './taskbutton'


class Tasks extends Component {
    render() {
        return (
            <div>
                <TaskButton />
                <TaskForm />
            </div>
        )
    }
}

export default Tasks;