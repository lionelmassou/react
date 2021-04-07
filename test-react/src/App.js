import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
			<div className="view-home">
				<h1>Hello {this.name} !</h1>
				<p> Welcome to my amazing blog</p>
			</div>

      
	
    );
  }
}

export default App;