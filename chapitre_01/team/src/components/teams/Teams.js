import React from "react"

class Teams extends React.Component {
    render() {
        return (
            <div>
                <p style={{ backgroundColor: "black", color: this.props.color, fontSize: 20 }}>{`The team is "${this.props.name}" and the color is "${this.props.color}" and they have ${this.props.point}`}</p>
                <p> {`The Amount of point is: ${this.props.point}`}</p>
                <p> {`Number of Matches: ${this.props.match}`}</p>
            </div>
        )

    }
}
export default Teams