import React from "react";
import Steps from "../components/"; // on importe le composant enfant Welcome

class Steps extends React.Component {
  render() {
    return (
      <div className="box col-sm-3 col-6">
        <span class="material-icons" style="font-size: 100px" color="black">directions_walk</span>
      </div>
    );
  }
}

export default Steps;
