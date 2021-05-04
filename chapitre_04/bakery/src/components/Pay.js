import React from "react";
import Card from "./Card.js"

class Pay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            basket: [],
            total: 0,
            totaoTVA: 0,
            totalEcotax: 0,
            totalTTC: 0
        }
    }

    handleSelect(name, price) {
        console.log("name", name)
        console.log("price", price)

        const newItemBasket = {
            name: name,
            price: price
        }

        const newBasket = [...this.state.basket, newItemBasket]

        let total = 0

        for (let index = 0; index < newBasket.length; index++) {
            const element = newBasket[index];
            total += parseInt(element.price)
        }

        console.log('total', total);

        const totalTVA =  total * 0.2

        const totalEcotax = total + 0.3

        const totalTTC = total + totalTVA + totalEcotax


        this.setState({
            basket: newBasket,
            total,
            totalTVA,
            totalEcotax,
            totalTTC
        })

        // console.log("à quoi ressemble basket : ", this.state.basket)
    }


    render() {

        return (
            <div>
                <h2>Pay</h2>
                <p>total = {this.state.total}€</p>
                <p>totalTVA = {this.state.totalTVA}€</p>
                <p>totalEcotax = {this.state.totalEcotax}€</p>
                <p>totalTTC = {this.state.totalTTC}€</p>

                {/* <Card productName ="croissant"/> */}
                <div className="row">
                    {/* <ul> */}
                    {this.props.items.map((item) => (

                        // console.log("à quoi ressemble item : ", item)
                        // <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>
                        <Card productName={item.name} price={item.price} onClick={this.handleSelect} />
                        // <span>{item.price}€</span>
                        // </li>
                    ))}
                    {/* </ul> */}
                </div>
            </div >
        )
    }
}

export default Pay;
