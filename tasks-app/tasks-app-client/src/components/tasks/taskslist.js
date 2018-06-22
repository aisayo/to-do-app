import React from 'react';
import Task from './task';

const TaskList = (props) => {
    console.log(props)

    // const tasks = tasks.map((task) => {
    //     return (
    //         <div key={task.id}>
    //             <Task task={task}/>
    //         </div>
    //     )
    // })

    return (
        <div>
            <Task task={props.tasks}/>
        </div>
    )
}

export default TaskList;