import React from "react";
import Counter from "./components/counter.js"

class App extends React.Component {
constructor (props){
  super(props);
  this.state = {
    count: 0,    
  }
this.incrementCount = this.incrementCount.bind(this)
this.decrementCount = this.decrementCount.bind(this)
}

incrementCount(){
  const {count} = this.state
    this.setState ({
      count: count + 1
    })
}

decrementCount(){
  const {count} = this.state
    this.setState ({
      count: count - 1
    })
}

// Mauvaise méthode mais fonctionne
// incrementCount = () => { this.setState({ count: this.state.count + 1 }) };
// decrementCount = () => { this.setState({ count: this.state.count - 1 }) };

  render() {

    return (
      <div>
        <h1>Counter</h1>
        <Counter count = {this.state.count} removeFunction = {this.decrementCount} addFunction = {this.incrementCount}/>
        {/* <h2>{this.state.count}</h2>
        <button onClick={this.decrementCount} style={{fontSize: 100, backgroundColor: "green"}}>-</button>
        <button onClick={this.incrementCount} style={{fontSize: 100 , backgroundColor: "red"}}>+</button> */}
      </div>
    )
  }
}

export default App;
