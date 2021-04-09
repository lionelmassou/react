import React from "react";
import './styles/global.css';
import Box from './components/Box.jsx'


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
      steps: 3000
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          < Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          < Box icon="directions_walk" color="black" value={3000} unit="steps" />
          < Box icon="favorite" color="red" value={120} unit="bpm" />
          < Box icon="wb_sunny" color="yellow" value={-10} unit="C°" />

          {/* < Box icon="local_drink" color="#3A85FF" value= {this.state.water} unit="L" />
          < Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" />
          < Box icon="favorite" color="red" value={this.state.heart} unit="bpm" />
          < Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="C°" /> */}

          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>


        </div>

      </div>
    );
  }
}

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> */ }
export default App;