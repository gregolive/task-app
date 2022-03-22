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
        id: uniqid(),
      },
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  }

  onSubmitTask(e) {
    e.preventDefault();
    if (this.state.task !== '') {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
        },
      });
    }
    
  };

  render() {
    const { tasks, task } = this.state;
  
    return (
      <div className='app-container'>
        <form onSubmit={this.onSubmitTask}>
          <input type='text' value={task.text} onChange={this.handleInputChange}></input>
          <button type='submit'>Add task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    )
  };
}

export default App;
