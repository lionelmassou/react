// 1ere partie

// 1. Quel est la différence entre une props et un state? Vous pouvez utiliser du code pour l'expliquer, en plus du texte
"les props sont des données modifiables contrairement au state qui peut etre"
"modifiable et utilisable partout où on a besoin"

// 2. Est-ce que n'importe quel composant peut créer son propre state ?
"Le state peut etre crée tant que le composant est un parent de quelqu'un"

// 3. Décrivez les étapes pour faire une remontée de donnée entre un composant enfant et son parent. Pas besoin de répondre avec du code
"decrire,manipuler ou éditer la logique depuis le parent"
"le parent envoit tout à l'enfant pour qu'il l'exécute"
"l'enfant renvoit le résultat au parent qui l'affiche"


// 2ème partie

// Rajoutez le code correspondant pour répondre au instructions marqués en commentaires

import React from 'react';

class Quizz extends React.Component {

    constructor() {
        super();

        this.state = {
            list: [1, 2, 3, 4],
            foo: false
        }

        this.click = this.click.bind(this);
    }

    click() {
        console.log('Je suis clické');

        // Il faut que je rajoute un element number au choix à ma list à chaque click
        // Bonus: le number doit être random/different pour chaque click
        
        this.setState({
            list: [...this.state.list., 15]
        })
    }

    // const number = Math.floor(Math.random() * 9)
    // const result = []


    render() {
        return (
            <div>
                {/* afficher dans des balises ul / li tout 
                les element de la list en utilisant la fonction map}*/}

                <ul>

                    {
                        this.state.list.map((elem) => {
                            return <li>{elem}</li>
                        })
                    }

                </ul>

                <button onClick={this.click}>Button</button>
            </div>
        )
        // on veut pas ça
        //	<ul><li> 1</li></ul>
        //	<ul><li> 2</li></ul>
        //	<ul><li> 3</li></ul>
        //	<ul><li> 4</li></ul>

        // on veut ça
        //	<ul>
        //		<li>1</li>
        //		<li>2</li>
        //		<li>3</li>
        //		<li>4</li>
        //	</ul>
    }

}

export default Quizz