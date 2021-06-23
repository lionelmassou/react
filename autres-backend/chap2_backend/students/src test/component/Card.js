import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


class Card extends Component {
    render() {
        return (
            <div className="text-center">

                {/* <h2>{this.props.id}</h2> */}

                <h3>{this.props.id}: {this.props.name}</h3>

            </div>
        );
    }
}

export default Card;