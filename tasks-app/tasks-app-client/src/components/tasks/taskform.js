import React, { Component } from 'react';

const TaskForm = (props) => {

    return (
        <div>
        <h3>Create a New Task</h3>
        <form className="TaskForm" onSubmit={(event) => props.handleOnSubmit(event)}>
            <label htmlFor="task" className="TaskLabel">Task:</label>
            <input 
                className="TaskInput"
                type="text"
                name="task"
                value={props.task}
                onChange={(event) => props.handleOnChange(event)}
            />

            < input type="submit" />

        </form>
    </div>
    )
}

export default TaskForm;

