import React from 'react';


const TaskButton = (props) => {

        return (
            <div>
                <button className="TaskCard" 
                    onClick={props.handleOnClick}>
                    Task
                </button>
               
            </div>
            
        )
  
}

export default TaskButton;