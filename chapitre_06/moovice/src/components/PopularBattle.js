import React, { Component } from 'react'
// import Card from './Card'


export class PopularBattle extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0
        }
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("ceci est le resulat", data)

                console.log("", data.results);

                this.setState({
                    movies: data.results
                });
            })
            .catch(err => console.error("fetch error", err))
    }

    render() {

        console.log("1er film : ", this.state.movies[0])
        console.log("2e film : ", this.state.movies[1])

        return (
            <div>
                <h1>Popular Battle</h1>
            </div>
        )
    }
}

export default PopularBattle
