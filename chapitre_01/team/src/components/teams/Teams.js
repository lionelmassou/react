import React from "react"

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: this.props.point,
            // show: true
        }
    }

    addOne = () => { this.setState({ clicks: this.state.clicks + 1 }) };

    render() {
        return (
            <div>
                <p style={{ backgroundColor: "black", color: this.props.color, fontSize: 15 }}>{`The team is "${this.props.name}" and the color is "${this.props.color}" and they have ${this.state.clicks}`}</p>
                <p style={{ fontSize: 12 }}> {`The Amount of point is: ${this.state.clicks}`}</p>
                <p style={{ fontSize: 12 }}> {`Number of Matches: ${this.props.match}`}</p>
                <button onClick={this.addOne} style={{ fontSize: 12 }}> Ajouter 1</button>
                <p> </p>

                

            </div>
        )

    }
}
export default Teams