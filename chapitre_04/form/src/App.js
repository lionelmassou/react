import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
constructor(props){
  super(props);

  this.state = {
    email: "",
    code: "",
  }

  this.emailInput = this.emailInput.bind(this)
  this.codeInput = this.codeInput.bind(this)

}

emailInput (event) {
  console.log(this.state.email);
  this.setState({
    email: event.target.value
  })
}

codeInput (event) {
  console.log(this.state.code);
  this.setState({
    email: event.target.value
  })
}

  render(){


    return (
      <div className = "box col-sm-3 col-6" >
        <h1 >LOGIN</h1>
        <h7>Email address</h7>
        <form>
        <input type="text" value={this.state.email} onChange={event => this.emailInput(event)}/>
        </form>

        <h7>Password</h7>
        <form>
        <input type="text" value={this.state.code} onChange={event => this.codeInput(event)}/>
        </form>

      </div>
    )}
}

export default App