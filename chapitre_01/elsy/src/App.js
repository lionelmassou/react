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

  }
  newFunctHeart(e) {
    // console.log("state1", this.state.heart);
    // console.log(e.target);
    this.setState({
      heart: e.target.value
    })
    // console.log("state2", this.state.heart);
  }

  newFunctSteps(e) {
     this.setState({
      steps: e.target.value
    })
    // console.log("state2", this.state.steps);
  }

  newFunctTemp(e) {
    this.setState({
      temperature: e.target.value
    })
    // console.log("state2", this.state.temperature);
  }


  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          < Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          {/* steps */}
          < Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" onStepsChange={this.newFunctSteps} />
          {/* heart */}
          < Box icon="favorite" color="red" value={this.state.heart} unit="bpm" onHeartChange={this.newFunctHeart} />
          {/* temperature */}
          < Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="C°" onTempChange={this.newFunctTemp} />

          {/* < Box icon="local_drink" color="#3A85FF" value= {this.state.water} unit="L" />
          < Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" />
          < Box icon="favorite" color="red" value={this.state.heart} unit="bpm" />
          < Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="C°" /> */}

          <p>Heart : {heartMin} Bpm</p>
          <p>Temperature : {tempMin}°C</p>
          <p>Steps : {stepsMin} pas</p>


        </div>

      </div>
    );
  }
}

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> */ }
export default App;