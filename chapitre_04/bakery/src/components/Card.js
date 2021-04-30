import React from "react";


class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: "../../public/images/item.png"
        }
    }

    componentDidMount() {
        let url = `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
        console.log("url", url)
        fetch(url)
            .then(res => res.blob())
            .then (() => URL.createObjectURL)
            .then(() => {
                this.setState({
                    image: url
                });
            })
            .catch(error => console.error(error))
    }

    render() {
        

        <button onClick={() => { this.props.onClick(this.props.productName, this.props.price) }}>
            {/* <img src={`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`} /> */}
            <img src = {this.state.image}></img>
        </button>

        return (
            <div>
                <p>{this.props.productName}</p>
                <p>{this.props.price}</p>
                <p>{this.props.onClick}</p>
            </div>
        )
    }
}

export default Card;
