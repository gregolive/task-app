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
    this.editTask = this.editTask.bind(this);
  };

  handleInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        count: this.state.task.count,
        id: this.state.task.id,
      }
    });
  };

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

  deleteTask(target) {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== target.id)
                             .map((t) => { if (t.count > target.count) { t.count -= 1 } return t; }),
    });
  };

  editTask(e, target) {
    this.setState({
      tasks: this.state.tasks.map((t) => { if (t.id === target.id) { t.text = e.target.value } return t; }),
    });
  };

  render() {
    const { tasks, task } = this.state;
  
    return (
      <div className='app-container'>
        <form onSubmit={this.onSubmitTask}>
          <input type='text' className='new-task' placeholder='Build new Death Star' value={task.text} onChange={this.handleInputChange}></input>
          <button type='submit' className='btn btn-primary'>Add task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
      </div>
    )
  };
};

export default App;
