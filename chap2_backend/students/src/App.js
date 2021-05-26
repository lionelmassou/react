import React, { Component } from 'react'
import List from "./component/List.js"
import Add from "./component/Add.js"


export class App extends Component {
  render() {
    return (
      <div>
        <List />
        <Add />
      
      </div>
    )
  }
}

export default App
