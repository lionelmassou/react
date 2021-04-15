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
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickList = this.handleClickList.bind(this)
    this.handleClickPay = this.handleClickPay.bind(this)
  }

  handleClickAdd() {
    this.setState({
      activeTab: "add"
      
    })
  }

  handleClickList() {
    this.setState({
      activeTab: "list"
    })
  }

  handleClickPay() {
    this.setState({
      activeTab: "pay"
    })
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
    );
  }

  // renderButton() {
  //   if (this.state.activeTab === 'add') {
  //     return (
  //       <Button style = {{ backgroundColor: "blue"}} />
  //     )
  //   } else {
  //     return (
  //       <Button style = {{ backgroundColor: "white"}} />
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        {this.renderContent()}

        <div style={{ alignItems: "flex", display: "flex", justifyContent: "center" }}>
          {/* {this.renderNavigation()} */}

          < Button
            isSelected={this.state.activeTab === "add" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.handleClickAdd}
          > Add </ Button>

          < Button
            isSelected={this.state.activeTab === "list" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.handleClickList}

          > List </ Button>

          < Button
            isSelected={this.state.activeTab === "pay" ? "btn btn-primary" : "btn btn-light"}
            onClick={this.handleClickPay}

          > Pay </ Button>


          {/* {this.renderButton(Add)}
          {this.renderButton(List)}
          {this.renderButton(Pay)} */}

        </div>
      </div>
    );
  }
}
export default App;
