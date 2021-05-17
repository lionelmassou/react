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

        const today = moment().format('YYYY-MM-DD')
        const lastweek = moment().subtract(1, "week").format('YYYY-MM-DD')


        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastweek}&primary_release_date.lte=${today}&api_key=e441f8a3a151d588a4932d2c5d310769`
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





