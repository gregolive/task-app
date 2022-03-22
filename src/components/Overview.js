import React from 'react';

export default class Overview extends React.Component {
  render () {
    const { tasks } = this.props;
  
    return (
      <div className='tasks'>
        <h1>My Task List</h1>
        <ul>
          {tasks.map((task) => 
            <li key={task.id}>{task.text}</li>
          )}
        </ul>
      </div>
    )
  }
};
