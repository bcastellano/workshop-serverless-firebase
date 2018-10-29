import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('todos')
      .onSnapshot((querySnapshot) => {
        let newList = []
        querySnapshot.forEach(function(doc) {
          newList.push(doc.data().text)
        })

        this.setState({
          todos: newList
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Todo list
          </p>
          <ul>
            {this.state.todos.map((item) => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
