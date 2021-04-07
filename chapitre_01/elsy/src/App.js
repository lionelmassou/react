import React from "react";
import './App.css';
import Steps from './components/Steps.jsx'

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          < Steps />
          <p>Heart : 80</p>
          <p>Temperature : -20</p>
          <p>Steps : 0</p>

        </div>
      </div>
    );
  }
}

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script> */ }
export default App;