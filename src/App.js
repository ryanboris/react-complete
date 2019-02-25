import React, { Component } from 'react'
import Person from './Person'
import uuidv4 from 'uuid'

export default class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 38, isOnline: true },
      { name: 'Jon', age: 34, isOnline: true },
      { name: 'Ted', age: 44, isOnline: false }
    ]
  }
  nameChangeHandler = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <>
        <Person nameChangeHandler={this.nameChangeHandler} />
      </>
    )
  }
}
