import React, { PureComponent } from 'react';
import TaskForm from './taskform'
import TaskButton from './taskbutton'
import TaskList from './taskslist';

class Tasks extends PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            task: '',
            completed: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/tasks.json')
        .then(res => console.log(res.json()))
        
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
            <div className="TasksContainer">
                <div>
                    <TaskButton handleOnClick={this.handleOnClick} />
                </div>
                <div>
                    <TaskForm 
                        task={this.state.task}
                        completed={this.state.completed}
                        handleOnChange={this.handleOnChange}
                        handleOnSubmit={this.handleOnSubmit}
                    />
                </div>
                <div className="TaskList">
                    <TaskList tasks={this.state.task}/>
                </div>
            </div>
        )
    }
}

export default Tasks;