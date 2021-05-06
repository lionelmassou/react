import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={`https://image.tmdb.org/t/p/w300${this.props.poster_path}`} alt="" />
                
                <h2>{this.props.title}</h2>

                <h3>{this.props.release_date}</h3>

                <p>{this.props.overview}</p>
            </div>
        );
    }
}

export default Card;



// import React, { Component } from 'react'
// // import Popular from './Popular'
// import 'bootstrap/dist/css/bootstrap.min.css';



// export class Card extends Component {

//     // constructor(props) {
//     //     super(props)

//     // }
//     render() {

//         return (
//             <div className = "text-center">
//                 <img src = {this.props.image} alt="" />
//                 <p>titre: {this.props.title}</p>
//                 <p>Année de sortie : {this.props.release}</p>
//                 <p>Description : {this.props.overview}</p>
//             </div>
//         )
//     }
// }

// export default Card
