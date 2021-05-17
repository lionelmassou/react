import React, { Component } from 'react'
// import PopularBattle from './PopularBattle'

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
        const url = `http://api.themoviedb.org/3/movie/${id}?api_key=e441f8a3a151d588a4932d2c5d310769`

        // console.log(url);

        fetch(url)
            .then(response => response.json())
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
            <div>
                <h1>Favorites</h1>

            </div>
        )
    }
}

export default Favorites
