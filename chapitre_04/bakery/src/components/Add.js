import React from "react";

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            price: 1
        }
        this.updatePrice = this.updatePrice.bind(this)
        this.updateProductName = this.updateProductName.bind(this)
    }

    updateProductName(elem) {
        this.setState({
            productName: elem.target.value
        })
    }
    updatePrice(elem) {
        this.setState({
            price: elem.target.value
        })
    }

    render() {
        return (
            <div>
                <div style={{ alignItems: "flex", display: "flex", justifyContent: "center" }}> 
                    <input type="text" name="enter product" onChange={this.updateProductName} />

                    {/* à checker */}
                    <button type="button" className="btn btn-primary" onClick={this.props.addItem}>Add</button>
                </div>
                <div style={{ alignItems: "flex", display: "flex", justifyContent: "center" }}>
                    <p>{this.state.price}</p>
                </div>
                <div style={{ alignItems: "flex", display: "flex", justifyContent: "center" }}>
                    <input type="range" min={1} max={10} onChange={this.updatePrice} />
                </div>

            </div>

        )
    }
}

export default Add;
