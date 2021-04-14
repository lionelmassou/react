import React from 'react';
// import './styles/global.css'
import Add from "./components/Add.js";
import List from "./components/List.js";
import Pay from "./components/Pay.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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

        {/* <Nav variant="pills">
          <Nav.Item eventKey="/Add">
            <Nav.Link href="/Add">Add</Nav.Link>
          </Nav.Item>
          <Nav.Item eventKey="/List">
            <Nav.Link href="/List">List</Nav.Link>
          </Nav.Item>
          <Nav.Item eventKey="/Pay">
            <Nav.Link href="Pay">Pay</Nav.Link>
          </Nav.Item>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group>
          </Form>

          <Button />

        </Nav> */}

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

  render() {
    return (
      <div className="container-fluid">
        <div className="col">
          {this.renderContent()}
          <div className="col">
            {this.renderNavigation()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
