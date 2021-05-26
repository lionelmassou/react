import React, { Component } from 'react'

export class List extends Component {
constructor (){
    super ()
}

componentDidMount(){
    fetch("http://localhost:3000/")
    .then (res => res.json())
    .then (result => {
        console.log("ceci est le resulat", result)
    })
}
    render() {
        return (
            <div>
                <h1>List</h1>
            </div>
        )
    }
}

export default List
