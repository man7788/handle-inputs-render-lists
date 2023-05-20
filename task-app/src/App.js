import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        order: '',
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        order: this.state.tasks.length,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  onDelete = (e) => {
    const targetId = e.target.id;

    let newTasks = this.state.tasks.filter((task) => task.id !== targetId);

    newTasks = newTasks.map((task, index) => {
      task.order = index;
      return task;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <div style={{ display: 'flex' }}>
          <Overview tasks={tasks} />
          <ul
            style={{
              listStyleType: 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {tasks.map((task) => {
              return (
                <button key={task.id} id={task.id} onClick={this.onDelete}>
                  Delete
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
