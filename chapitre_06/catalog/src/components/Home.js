import React, { Component } from 'react'
// import Movie from './Movie'
import moviedata from "../moviedata.json";
import { Link } from "react-router-dom"; // on importe les outils du router


export class Home extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                <h1> Choose Your Movie</h1>
                    {moviedata.map((elem, i) => {
                        console.log("les differents films", elem)
                        return <li key={i}><Link className="list-group-item" to={`/${elem.id}`}>{elem.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Home
