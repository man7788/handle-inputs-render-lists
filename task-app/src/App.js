import React, { Component } from 'react';
import Overview from './components/Overview';
import Delete from './components/Delete';
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
      edits: [],
      editTask: {
        text: '',
        id: uniqid(),
        order: '',
      },
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
    const newEdit = {
      display: (
        <button
          key={this.state.task.id}
          id={this.state.task.id}
          onClick={this.onEdit}
        >
          Edit
        </button>
      ),
      id: this.state.task.id,
    };
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
      edits: this.state.edits.concat(newEdit),
    });
  };

  onDelete = (e) => {
    const targetId = e.target.id;

    const newEdits = this.state.edits.filter((task) => task.id !== targetId);
    let newTasks = this.state.tasks.filter((task) => task.id !== targetId);

    newTasks = newTasks.map((task, index) => {
      task.order = index;
      return task;
    });

    this.setState({
      tasks: newTasks,
      edits: newEdits,
    });
  };

  onEdit = (e) => {
    const targetId = e.target.id;

    let newEdits = this.state.edits.map((edit, index) => {
      if (edit.id === targetId) {
        edit.index = index;
        edit.display = undefined;
        edit.field = (
          <form onSubmit={this.onSubmitEdit}>
            <input onChange={this.handleEdit} type="text" id={edit.id} />
            <button type="submit">Submit</button>
          </form>
        );
        return edit;
      } else {
        return edit;
      }
    });

    this.setState({
      edits: newEdits,
    });
  };

  handleEdit = (e) => {
    const id = e.target.id;
    let order;

    this.state.tasks.forEach((task) => {
      if (task.id === id) {
        order = task.order;
      }
    });

    this.setState({
      editTask: {
        text: e.target.value,
        id: this.state.editTask.id,
        order: order,
      },
    });
  };

  onSubmitEdit = (e) => {
    e.preventDefault();
    const newEdit = {
      display: (
        <button
          key={this.state.editTask.id}
          id={this.state.editTask.id}
          onClick={this.onEdit}
        >
          Edit
        </button>
      ),
      id: this.state.editTask.id,
      field: undefined,
    };

    const order = this.state.editTask.order;
    const newTasks = this.state.tasks.map((task) => {
      return task;
    });
    const newEdits = this.state.edits.map((task) => {
      return task;
    });
    newTasks.splice(order, 1, this.state.editTask);
    newEdits.splice(order, 1, newEdit);

    this.setState({
      tasks: newTasks,
      editTask: {
        text: '',
        id: uniqid(),
      },
      edits: newEdits,
    });
  };

  render() {
    const { task, tasks, edits } = this.state;

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
            }}
          >
            <Delete tasks={tasks} onClick={this.onDelete} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {edits.map((edit) => {
                return (
                  <div key={edit.id}>
                    {edit.field}
                    {edit.display}
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
