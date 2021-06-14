import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import List from "./component/List.js"
import Add from "./component/Add.js"


export class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div>
          <nav> 
            <ul>
              <li><Link to="/students/List">List</Link></li>
              <li><Link to="/Students/Add">Add</Link></li>
            </ul>
          </nav>

          <Switch>

            <Route exact path="/students/List" render={() => <List />} ></Route>
      
          </Switch>

          {/* <List />
          <Add /> */}

        </div>
      </BrowserRouter>
    )
  }
}

export default App
