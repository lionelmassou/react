import React from "react";

class Box extends React.Component {

  // constructor(props) {
  //   super(props);

  // }

  render() {

    const notShow = () => {

      if (this.props.unit !== "L") {
        if (this.props.unit === "steps") {
          return (<input type="range" min={this.props.min} max={this.props.max} value={this.props.value} step = {1000} onInput={this.props.onChangeFunct}></input>)
        }
        return (<input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChangeFunct}></input>)
        // if (this.props.unit === "steps") {
        //   // return (<input type="range" min={this.props.stepsMin} max={this.props.stepsMax} value={this.props.value} onInput></input>)
        //   return (<input type="range" min={this.props.min} max={this.props.max} value = {this.props.value} onInput={this.props.onStepsChange}></input>)

        // } else if (this.props.unit === "bpm") {
        //   // return (<input type="range" min={this.props.heartMin} max={this.props.heartMax} value={this.props.value} onInput></input>)
        //   return (<input type="range" min={this.props.min} max={this.props.max} value = {this.props.value} onInput={this.props.onHeartChange}></input>)

        // } else if (this.props.unit === "C°") {
        //   // return (<input type="range" min={this.props.tempMin} max={this.props.tempMax} value={this.props.value} onInput></input>)
        //   return (<input type="range" min={this.props.min} max={this.props.max} value = {this.props.value} onInput={this.props.onTempChange}></input>)

        }

      };


      return (
        <div className="box col-sm-3 col-6">
          {/* <span className="material-icons" style={{ fontSize: 100, color: 'black'}}>directions_walk</span> */}
          <span
            className="material-icons"
            style={{ fontSize: 100, color: this.props.color }}
          >
            {this.props.icon}
          </span>
          <p>
            {this.props.value} {this.props.unit}
          </p>

          {notShow()}
        </div>
      );
    }
  }
  export default Box;
