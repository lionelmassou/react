import React from "react";
// import Card from "./Card.js"

class Pay extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          basket: [],
          total: 0,
          totaoTVA: 0,
          totalEcotax: 0,
          totalTTC: 0
      }
    }

handleSelect(name, price){
    console.log("name", name)
    console.log("price", price)
}
    
    render() {

        return (
            <div>
                <h1>{this.props.items}</h1>
                {/* <Card productName ="croissant"/> */}

            </div>
        )
    }
}

export default Pay;
