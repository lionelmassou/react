import React, { Component } from 'react'
import { getMovieApi } from '../utils/Api.js'
import Card from '../components/Card'

export class Favorites extends Component {

    constructor() {
        super()

        this.state = {
            movies: [],
            favIds: this.getStorage()
        }
        this.getStorage = this.getStorage.bind(this)
        this.getMovie = this.getMovie.bind(this)
    }


    getStorage() {
        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        console.log("idsFavorites ", idsFavorites)
        return idsFavorites
    }


    getMovie(id) {
        getMovieApi(id)
            .then(data => {
                // console.log("data" , data);
                this.setState({
                    movies: [...this.state.movies, data]
                })
            })
        // console.log("movies data", this.state.movies);
    }


    componentDidMount() {
        this.state.favIds.map((item) => this.getMovie(item))
    }


    render() {
        // console.log("favIds", this.state.favIds);
        // console.log("movies", this.state.movies);
        return (
            <div className="container">
            <h1 className="text-center">Favorites</h1>

            <div className="row">
                {
                    this.state.movies.map(elem => {
                        return (
                            <div className="col-6">
                                <Card {...elem} />
                            </div>
                        )
                    })
                }
            </div>


        </div>
        )
    }
}

export default Favorites
