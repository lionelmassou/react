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
        {/* Les options */}
        <Nav variant="pills" defaultActiveKey="/Add">
          <Nav.Item>
            <Nav.Link href="/Add">Add</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/List">List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Pay">Pay</Nav.Link>
          </Nav.Item>

          {/* le button et la barre de quantite */}
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group>
          </Form>

          <Button />
        </Nav>

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
