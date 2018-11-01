import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('todos')
      .onSnapshot((querySnapshot) => {
        let newList = []
        querySnapshot.forEach(function(doc) {
          newList.push({
            id: doc.id, 
            ...doc.data()
          })
        })

        this.setState({
          todos: newList
        })
      })
  }

  addTodo() {
    firebase
      .firestore()
      .collection('todos')
      .add({text: this.state.newTodo})
      .then(function () {
        console.log(`Document added successfully`)
      })
      .catch(function (error) {
        console.error('Error removing document: ', error)
      })
  }

  removeTodo(item) {
    firebase
      .firestore()
      .collection('todos')
      .doc(item.id)
      .delete()
      .then(function () {
        console.log(`Document ${item.id} removed successfully`)
      })
      .catch(function (error) {
        console.error('Error removing document: ', error)
      })
  }

  updateInputValue(evt) {
    this.setState({
      newTodo: evt.target.value
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
          <input
            type="text"
            placeholder="new todo..."
            value={this.state.newTodo} onChange={this.updateInputValue}
          />
          <button onClick={this.addTodo}>add {this.state.newTodo ? "'" + this.state.newTodo + "'" : ''}</button>
          <ul>
            {this.state.todos.map((item) => {
              return (
                <li key={item.id}>
                  {item.text} 
                  <button onClick={() => this.removeTodo(item)}>X</button>
                </li>
              )
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
