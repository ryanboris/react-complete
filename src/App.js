import React, { Component } from 'react'
import OnlineIcon from './OnlineIcon'

export default class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 38, isOnline: true },
      { name: 'Jon', age: 34, isOnline: true },
      { name: 'Ted', age: 44, isOnline: false }
    ]
  }
  render() {
    return (
      <div className="container">
        <OnlineIcon />
      </div>
    )
  }
}
