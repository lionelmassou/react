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
      <div>
        <nav className="col">
          <p>
            <a href="/add">Add</a>
          </p>
          <p>
            <a href="/list">List</a>
          </p>
          <p>
            <a href="/pay">Pay</a>
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

  renderButton() {
    if (this.state.activeTab === 'add') {
      return (
        <Button style = {{ backgroundColor = "blue"}} />
      )
    } else {
      return (
        <Button style = {{ backgroundColor = "white"}} />
      );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col">
          {this.renderContent()}
          <div className="col">
            {this.renderNavigation()}
            {this.renderButton()}
            {/* < Button
              isSelected={
                this.state.activeTab === "add" ? style = {{ backgroundColor : "blue"}} : style = {{ backgroundColor : "white"}}
              }
            /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
