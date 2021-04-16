import React from "react";

class List extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        // console.log("voila", this.props.listItems)

        return (
            <div>
                <ul className="list-group">
                    {this.props.listItems.map((elem, index) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            {/* {elem.name} {elem.price} */}
                            {elem.name}
                            <span className="badge badge-primary badge-pill btn btn-primary">{elem.price}€</span>
                            <span><button className="btn btn-warning" onClick={this.removeItem} >reset</button></span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default List;
