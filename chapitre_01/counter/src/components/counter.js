import React from "react";


class Counter extends React.Component {
    
// PAS BESOIN DE CETTE PARTIE

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0,
    //     }

    //     this.incrementCount = this.incrementCount.bind(this)
    //     this.decrementCount = this.decrementCount.bind(this)
    // }

    // incrementCount() {
    //     const { count } = this.state
    //     this.setState({
    //         count: count + 1
    //     })
    // }

    // decrementCount() {
    //     const { count } = this.state
    //     this.setState({
    //         count: count - 1
    //     })
    // }

    // // incrementCount = () => { this.setState({ count: this.state.count + 1 }) };
    // // decrementCount = () => { this.setState({ count: this.state.count - 1 }) };

    render() {

        return (
            <div>
                <h2>{this.props.count}</h2>

                {/* <button onClick={this.decrementCount} style={{ backgroundColor: "green" }}>-</button> */}
                <button onClick={this.props.removeFunction} style={{ backgroundColor: "green" }}>-</button>


                {/* <button onClick={this.incrementCount} style={{ backgroundColor: "red" }}>+</button> */}
                <button onClick={this.props.addFunction} style={{ backgroundColor: "red" }}>+</button>
            </div>

        )
    }
}

export default Counter