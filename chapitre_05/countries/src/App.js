import React from "react";
import Button from "./components/Button.js";
import Card from "./components/Card.js"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles/global.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      humanChoose: ""
    }
    this.searchCountry = this.searchCountry.bind(this)
  }

  searchCountry(event) {
    console.log(event.target.value)
    this.setState({
      humanChoose: event.target.value
    })
  }

  componentDidMount() {
    fetch("http://localhost:8000/countries/france")
      .then(response => response.json())
      .then(result => {
        console.log(result)

        this.setState({
          name: result.arrayCountry[0].name,
          capital: result.arrayCountry[0].capital,
          flag: result.arrayCountry[0].flag,
          population: result.arrayCountry[0].population,
          region: result.arrayCountry[0].region
        })
      })
      .catch(error => console.error(error));
  }

  getCountry(country) {
    return fetch("http://localhost:8000/countries/" + country)
    .then(response => response.json())
    .then(result => {
      console.log(result)

      this.setState({
        name: result.arrayCountry[0].name,
        capital: result.arrayCountry[0].capital,
        flag: result.arrayCountry[0].flag,
        population: result.arrayCountry[0].population,
        region: result.arrayCountry[0].region
      })
    })
    .catch(error => console.error(error));
}

  renderButton() {
    console.log("humanChoose 2", this.state.humanChoose)
    return (
      <div className="container">

        <div className="bg-secondary.bg-gradient d-flex justify-content-center">
          <div className="p-2 bd-highlight">
            <Button onClick={() => this.getCountry("france")} children="France"></Button>
          </div>
          <div className="p-2 bd-highlight">
            <Button onClick={() => this.getCountry("brazil")} children="Brazil" ></Button>
          </div>
          <div className="p-2 bd-highlight">
            <Button onClick={() => this.getCountry("croatia")} children="Croatia" ></Button>
          </div>
        </div>
        {/* <form>
          <input
            type="text"
            className="button"
            id="Search"
            onChange={this.searchCountry}
          />
          <Button onClick={this.getCountry}>
            Search
        </Button>
        </form> */}

      </div>
    )
  }
  render() {

    return (

      <div className="container">
        <div className="text-center">
          {this.renderButton()}
          <p></p>
          <Card name={this.state.name} capital={this.state.capital} flag={this.state.flag} population={this.state.population} region={this.state.region} />
        </div>
      </div >
    );
  }
}
export default App;