import React from "react";
import './styles/global.css';
import Box from './components/Box.js'


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
    this.newFunctHeart = this.newFunctHeart.bind(this)
    this.newFunctSteps = this.newFunctSteps.bind(this)
    this.newFunctTemp = this.newFunctTemp.bind(this)
    this.calculateWater = this.calculateWater.bind(this)

  }
  newFunctHeart(e) {
    // console.log("state1", this.state.heart);
    // console.log("1", e.target.value);
    this.setState({
      heart: e.target.value
    })
    this.calculateWater()
    // console.log("state2", this.state.heart);
  }

  newFunctSteps(e) {
    // console.log("2", e.target.value);

    this.setState({
      steps: e.target.value
    })
    this.calculateWater()
    // console.log("state2", this.state.steps);
  }

  newFunctTemp(e) {
    // console.log("3", e.target.value);

    this.setState({
      temperature: e.target.value
    })
    this.calculateWater()
    // console.log("state2", this.state.temperature);
  }

  calculateWater() {
    let tmp1 =0;
    let tmp2 =0;
    let tmp3 = 0;
    if (this.state.temperature > 20) {
      tmp1 = 0.02 * (this.state.temperature - 20)
      // this.setState({ water: tmp}) 
    }
    if (this.state.heart > 120) {
      tmp2 = 0.0008 * (this.state.heart - 120)
      // this.setState({ water: this.state.water + 0.0008*(this.state.heart-120)})
    }
    if (this.state.steps > 10000) {
      tmp3 = 0.00002 * (this.state.steps - 10000)
      // this.setState({ water: this.state.water + 0.00002*(this.state.steps-10000) })
    }
    let total = tmp1 + tmp2 + tmp3;
    this.setState({ water: (1.5 + total ).toFixed(2)})
  }


  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          < Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          {/* steps */}
          < Box icon="directions_walk" color="black" min={stepsMin} max={stepsMax} value={this.state.steps} unit="steps" onChangeFunct={this.newFunctSteps} />
          {/* heart */}
          < Box icon="favorite" color="red" min={heartMin} max={heartMax} value={this.state.heart} unit="bpm" onChangeFunct={this.newFunctHeart} />
          {/* temperature */}
          < Box icon="wb_sunny" color="yellow" min={tempMin} max={tempMax} value={this.state.temperature} unit="C°" onChangeFunct={this.newFunctTemp} />

          <p>Heart : {heartMin} Bpm</p>
          <p>Temperature : {tempMin}°C</p>
          <p>Steps : {stepsMin} pas</p>


        </div>

      </div>
    );
  }
}

export default App;