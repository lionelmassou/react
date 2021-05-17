import React, { Component } from 'react'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Popular extends Component {
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

    // render() {

    //     console.log("new value of the array movies : ", this.state.movies)
    //     return (
    //         <div className="container">
    //             <h1>Popular</h1>

    //             <div className="row">
    //                 <ul>
    //                     {this.state.movies.map((elem, index) => {
    //                         // const url = "https://image.tmdb.org/t/p/w300/"
    //                         // return <div className="col">
    //                         //     <Card {...elem} />
    //                         // </div>


    //                         return <li className = "col" key={index}>
    //                             <Card
    //                                 // image={url + elem.poster_path}
    //                                 image={"https://image.tmdb.org/t/p/w300/" + elem.poster_path}
    //                                 title={elem.title}
    //                                 release={elem.release_date}
    //                                 overview={elem.overview}
    //                             />
    //                         </li>
    //                     })}
    //                 </ul>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Popular
