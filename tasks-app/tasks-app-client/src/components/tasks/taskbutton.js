import React, { Component } from 'react';


class TaskButton extends Component {


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
               
            </div>
            
        )
    }
}

export default TaskButton;