import './App.css';
import MyList from './components/Overview';
import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: '',
      tasksArray: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  
    let formValue = e.target[0].value
    console.dir(formValue);

    this.setState(state => {
      const tasksArray = state.tasksArray.concat(formValue);
      const txt = ''
      return { txt, tasksArray, }
    });

    e.target[0].value = ''
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input></input>
        <button type="submit">Submit</button>
        <MyList tasksArray={this.state.tasksArray.map(item => (<li key={item}>{item}</li>))}/>
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <MyForm/>
    </div>
  );
}

export default App;
