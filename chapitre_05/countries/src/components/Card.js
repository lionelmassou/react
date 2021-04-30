import React from "react";
import "../styles/global.css"; 

class Card extends React.Component {

    render() {

        return (
            <div>
                <p> Name:{this.props.name} </p>
                <p> capital:{this.props.capital} </p>
                <img className="flag" src={this.props.flag} />
                <p></p>
                <p> Population:{this.props.population} </p>
                <p> Region:{this.props.region} </p>
            </div>
        )
    }
}
export default Card