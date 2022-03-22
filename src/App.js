import './App.css';
import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: ''
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.newTask = this.newTask.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  newTask(e) {
    if (this.state.inputValue !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.inputValue],
        inputValue: ''
      });
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="app-container">
        <form onSubmit={this.newTask}>
          <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <button type="submit">Add task</button>
        </form>
        <Overview tasks={this.state.tasks}/>
      </div>
    )
  };
}

export default App;
