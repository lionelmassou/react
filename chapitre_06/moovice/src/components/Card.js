import React, { Component } from 'react'
// import Popular from './Popular'


export class Card extends Component {

    // constructor(props) {
    //     super(props)

    // }
    render() {

        return (
            <div>
                <img src = {this.props.image} alt="" />
                <p>titre: {this.props.title}</p>
                <p>Année de sortie : {this.props.release}</p>
                <p>Description : {this.props.overview}</p>
            </div>
        )
    }
}

export default Card
