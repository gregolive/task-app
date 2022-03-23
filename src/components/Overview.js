import React from 'react';
import ListItem from './ListItem';

export default class Overview extends React.Component {
  render () {
    const { tasks, deleteTask, editTask } = this.props;
  
    return (
      <div className='tasks'>
        <h1>My Task List</h1>
        <ul>
          {tasks.map((task) => 
            <ListItem key={task.id} task={task} deleteTask={deleteTask} editTask={editTask}/>
          )}
        </ul>
      </div>
    )
  };
};
