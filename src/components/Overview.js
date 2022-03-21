import React from "react";

export default class Overview extends React.Component {
  render () {
    const { tasks } = this.props;
  
    return (
      <div>
        <ul>
          {tasks.map((task, i) => 
            <li key={i}>{task}</li>
          )}
        </ul>
      </div>
    )
  }
};