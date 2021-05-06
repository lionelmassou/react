import React, { Component } from 'react'
import PopularBattle from './PopularBattle'

export class Favorites extends Component {

    constructor (){
        super()

        this.state = {
            movies: [],
            favIds: this.getStorage()
        }
        this.getStorage= this.getStorage.bind(this)
    }

    getStorage(idsFavorites){
        console.log("idsFavorites ", idsFavorites)
        return localStorage.getItem(idsFavorites)
    }
    render() {
        return (
            <div>
                <h1>Favorites</h1>
                
            </div>
        )
    }
}

export default Favorites
