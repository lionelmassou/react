import React from 'react'
import {Link} from "react-router-dom"; // on importe les outils du router
import Home from './Home';


class Movie extends React.Component {


  render() {

    const movieWeChoose = this.props.moviedata.find(elem => {

      // console.log("ce que recoit l'enfant: ", this.props.match.params.id);

      return (elem.id === parseInt(this.props.match.params.id))
    })

    return (
      <div>
        <h2><Link className="list-group-item" to={"/"}> back to the homepage</Link></h2>

        <p>{movieWeChoose.id}</p>
        <p>{movieWeChoose.title}</p>
        <p>{movieWeChoose.drector}</p>
        <p>{movieWeChoose.description}</p>
        <ul>{movieWeChoose.stars.map((elem,i) => <li key={i}>{elem}</li>)}</ul>
        <img src={movieWeChoose.image} alt="" />

      </div>
    )
  }
}

export default Movie