import React, { Component } from 'react'
import moment from 'moment'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Weekly extends Component {

    constructor() {
        super()

        this.state = {
            movies: []
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
        return (
            <div>
                <h1>Popular</h1>

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
        );
    }


}

export default Weekly





