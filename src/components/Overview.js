import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

export default class Overview extends React.Component {
  render () {
    const { tasks, deleteTask } = this.props;
  
    return (
      <div className='tasks'>
        <h1>My Task List</h1>
        <ul>
          {tasks.map((task) => 
            <li key={task.id}>
              <div>
                <span className='task-count'>{task.count}›</span>
                {task.text}
              </div>
              <button onClick={() => deleteTask(task.id, task.count)} type='button' className='btn btn-delete'>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </li>
          )}
        </ul>
      </div>
    )
  }
};
