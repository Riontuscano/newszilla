import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = 'Rion'
  render() {
    return (
      <div>
        Hello {this.name}
      </div>
    )
  }
}
