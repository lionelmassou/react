import React from 'react';
// import './styles/global.css'
import Add from "./components/Add.js";
import List from "./components/List.js";
import Pay from "./components/Pay.js";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    }
  }

  renderNavigation() {
    return (
      <div className = "container-fluid">
      <nav className="row">
        <p>
          <a href="/Add">Add</a>
        </p>
        <p>
          <a href="/List">List</a>
        </p>
        <p>
          <a href="/Pay">Pay</a>
        </p>
      </nav>
      </div>
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
        {this.renderContent()}
        {this.renderNavigation()}
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
