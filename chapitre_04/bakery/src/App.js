import React from 'react';
// import './styles/global.css'
import Add from "./components/Add.js";
import List from "./components/List.js";
import Pay from "./components/Pay.js";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     activeTab: add,
  //     items: []
  //   }
  // }

  renderNavigation() {
    return (
      <nav>
        <ul>
          <li>
            <a href="./components/Add.js">Add</a>
          </li>
          <li>
            <a href="./components/List.js">List</a>
          </li>
          <li>
            <a href="./components/Pay.js">Pay</a>
          </li>
        </ul>
      </nav>
    );
  }

  renderContent() {
    return (
      <section>
        <h1>BAKERY</h1>
      </section>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.renderNavigation()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
  // render() {

  //   return (
  //     <div>
  //       <h1> BAKERY</h1>
  //       <Add />
  //       <List />
  //       <Pay />

  //     </div>
  //   )}
}
export default App;
