import React, { Component } from 'react'
import Card from './Card'
import { getLatestMovies } from '../utils/Api'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Weekly extends Component {

    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    componentDidMount() {

        getLatestMovies()
            .then(data => {
                // console.log("ceci est le resulat", data)

                // console.log("", data.results);

                this.setState({
                    movies: data.weeklyMovies
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





