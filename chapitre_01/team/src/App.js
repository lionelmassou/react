import React from "react"
import './App.css';
import Teams from "./components/teams/Teams.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Liste d'équipe de foot de France</h1>
        <Teams color="red" name="LOSC" point={7} match={4} />
        <Teams color="white" name="OM" point={9} match={4} />
        <Teams color="blue" name="PSG" point={11} match={4} />
        <Teams color="green" name="TROYES" point={6} match={4} />

        <p style={{ backgroundColor: "black", color: "yellow", fontSize: 20 }}>Fin de liste</p>

        
      </div>
    )
  }
}

export default App;
