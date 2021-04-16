import React from 'react';
// import './styles/global.css'
import Add from "./components/Add.js";
import List from "./components/List.js";
import Pay from "./components/Pay.js";
import Button from "./components/Button.js";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: "add",
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  selectAdd() {
    this.setState({
      activeTab: "add"
    })
  }

  selectList() {
    this.setState({
      activeTab: "list"
    })
  }

  selectPay() {
    this.setState({
      activeTab: "pay"
    })
  }

  addItem(name, price) {
    this.setState({
      name: name.target.value,
      price: price.target.value
    })
    console.log(this.state.items)
  }
  // renderNavigation() {
  //   return (
  //     <div>
  //       <nav className="col">
  //         <p>
  //           <a href="/add">Add</a>
  //         </p>
  //         <p>
  //           <a href="/list">List</a>
  //         </p>
  //         <p>
  //           <a href="/pay">Pay</a>
  //         </p>
  //       </nav>
  //     </div>
  //   );
  // }

  renderContent() {
    return (
      <section>
        <h1 style={{ textAlign: "center" }}>BAKERY</h1>
      </section>
    )
  }

  renderButton() {
    if (this.state.activeTab === "add") {
      return (
        <div>
          <Add />
        </div>
      )
    }
    if (this.state.activeTab === "list") {
      return (
        <List />
      )
    }
    if (this.state.activeTab === "pay") {
      return (
        <Pay />
      )
    }
  }

  renderButtonPress() {
    return (
      <div style={{ alignItems: "flex", display: "flex", justifyContent: "center" }}>

        < Button
          isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"}
          onClick={this.selectAdd}

          //à checker
          onClick={() => this.addItem()}


        > Add </ Button>

        < Button
          isSelected={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"}
          onClick={this.selectList}

        > List </ Button>

        < Button
          isSelected={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"}
          onClick={this.selectPay}

        > Pay </ Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        {/* {this.renderNavigation()} */}
        {this.renderButtonPress()}
        {this.renderButton()}



      </div>
    );
  }
}
export default App;
