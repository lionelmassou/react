import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      code: "",
    }

    this.emailInput = this.emailInput.bind(this)
    this.codeInput = this.codeInput.bind(this)

  }

  emailInput(event) {
    console.log(this.state.email);
    this.setState({
      email: event.target.value
    })
  }

  codeInput(event) {
    console.log(this.state.code);
    
    this.setState({
      code: event.target.value
    })
  }

  render() {


    return (
      <div className="box col-sm-3 col-6" >
        <h1 >LOGIN</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <button variant="primary" type="submit"  style ={{"backgroundColor": "blue"}}>
            Submit
        </button>
        </Form>

      </div>
    )
  }
}

export default App