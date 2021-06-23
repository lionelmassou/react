import React from 'react'
import axios from 'axios'
import Card from "./Card.js"

export class List extends React.Component {
    constructor() {
        super()

        this.state = {
            listName: []
        }
    }

    componentDidMount() {

        // fetch("http://localhost:8000/students")
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log("ceci est le resulat", result.listStudent)
        // this.setState({
        //     listName: result.listStudent
        // })

        const url = "http://localhost:8000/students"
        axios.get(url)
            .then(response => {
                console.log('response students get', response.data.listStudent)

                this.setState({
                    listName: response.data.listStudent
                })
            })

            .catch(err => console.error("fetch error", err))
        }
        
        // axios.post(url, {id: 20, name: "Ahmed"})

    render() {
        return (
            <div>
                <h1>Voici la Liste des Étudiants</h1>

                <div className="row">
                    {
                        this.state.listName.map(elem => {
                            return (
                                <li className="col-6">
                                    {/* <Card {...elem} /> */}
                                    {elem.name}
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default List
