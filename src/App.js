import './App.css';
import React from 'react';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends React.Component {  
  constructor() {
    super();
  
    this.state = {
      tasks: [],
      task: {
        text: '',
        count: 1,
        id: uniqid(),
      },
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        count: this.state.task.count,
        id: this.state.task.id,
      }
    });
  }

  onSubmitTask(e) {
    e.preventDefault();
    if (this.state.task.text !== '') {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: '',
          count: this.state.task.count + 1,
          id: uniqid(),
        },
      });
    }
  };

  deleteTask(taskId, taskCount) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== taskId)
                             .map((t) => { if (t.count > taskCount) { t.count -= 1 } return t; }),
    });
  }

  render() {
    const { tasks, task } = this.state;
  
    return (
      <div className='app-container'>
        <form onSubmit={this.onSubmitTask}>
          <input type='text' placeholder='Build new Death Star' value={task.text} onChange={this.handleInputChange}></input>
          <button type='submit' className='btn btn-primary'>Add task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask}/>
      </div>
    )
  };
}

export default App;
