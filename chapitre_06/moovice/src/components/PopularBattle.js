import React, { Component } from 'react';
import { getPopularMovies } from '../utils/Api'
import Card from '../components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


class PopularBattle extends Component {

    state = {
        movies: [],
        indexFirstMovieOfCurrentBattle: 0
    }

    componentDidMount() {
        getPopularMovies()
            .then(data => {
                this.setState({
                    movies: data.popularMovies
                })
            })
    }

    updateIndexMovieBattle = (movieId) => {
        console.log("updateIndexMovieBattle", typeof movieId);

        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        console.log("idsFavorites", idsFavorites);

        // if (!idsFavorites.find(elem => elem === movieId)) {
        if (!idsFavorites.includes(movieId)) {
            idsFavorites.push(movieId)

            localStorage.setItem("favorites", JSON.stringify(idsFavorites))
        }

        this.setState({
            indexFirstMovieOfCurrentBattle: this.state.indexFirstMovieOfCurrentBattle + 2
        })
    }

    renderTwoMovies() {
        const { indexFirstMovieOfCurrentBattle } = this.state

        return (
            <>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle].id)}>
                    <Card
                        title={this.state.movies[indexFirstMovieOfCurrentBattle].title}
                        poster_path={this.state.movies[indexFirstMovieOfCurrentBattle].poster_path}
                        release_date={this.state.movies[indexFirstMovieOfCurrentBattle].release_date}
                        overview={this.state.movies[indexFirstMovieOfCurrentBattle].overview}
                    />
                </div>
                <div className="col-6" style={{ cursor: "pointer" }}
                    onClick={() => this.updateIndexMovieBattle(this.state.movies[indexFirstMovieOfCurrentBattle + 1].id)}>
                    <Card
                        title={this.state.movies[indexFirstMovieOfCurrentBattle + 1].title}
                        poster_path={this.state.movies[indexFirstMovieOfCurrentBattle + 1].poster_path}
                        release_date={this.state.movies[indexFirstMovieOfCurrentBattle + 1].release_date}
                        overview={this.state.movies[indexFirstMovieOfCurrentBattle + 1].overview}
                    />
                </div>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Popular Battle</h1>


                {this.state.indexFirstMovieOfCurrentBattle > 19
                    ? "Vous avez parcouru tous les films "
                    : <div className="row">
                        {this.state.movies.length !== 0
                            ? this.renderTwoMovies()
                            : "Please wait until the movies are loaded"
                        }
                    </div>
                }


            </div>
        );
    }
}

export default PopularBattle;