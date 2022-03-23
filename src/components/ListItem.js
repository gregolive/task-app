import React from 'react';
import '@fortawesome/fontawesome-free/js/all';

export default class ListItem extends React.Component {
  constructor() {
    super();
  
    this.edit = false;
    this.toggleEditor = this.toggleEditor.bind(this);
  };

  toggleEditor() {
    this.edit = (this.edit) ? false : true;
    this.forceUpdate();
  };

  render () {
    const { task, deleteTask, editTask } = this.props;

    const normalMode = (
      <li>
        <div className='task'>
          <span className='task-count'>{task.count}›</span>
          <span className='task-text'>{task.text}</span>
        </div>
        <div>
          <button onClick={this.toggleEditor} type='button' className='btn btn-edit'>
            <i className='fas fa-pen-to-square'></i>
          </button>
          <button onClick={() => deleteTask(task)} type='button' className='btn btn-delete'>
            <i className='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
      </li>
    );

    const editMode = (
      <li>
        <div className='task'>
          <span className='task-count'>{task.count}›</span>
          <input className='edit-task' value={task.text} onChange={(e) => editTask(e, task)}></input>
        </div>
        <div>
          <button onClick={this.toggleEditor} type='button' className='btn btn-confirm'>
            <i className='fas fa-pen-to-square'></i>
          </button>
          <button onClick={() => deleteTask(task)} type='button' className='btn btn-delete' disabled>
            <i className='fa-solid fa-circle-xmark'></i>
          </button>
        </div>
      </li>
    );
  
    return ((this.edit) ? editMode : normalMode);
  };
};
