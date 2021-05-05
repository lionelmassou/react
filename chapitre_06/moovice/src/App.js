import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router

import Home from "./components/Home.js";
import Weekly from "./components/Weekly.js";
import WeeklyBattle from "./components/WeeklyBattle.js";
import Popular from "./components/Popular.js";
import PopularBattle from "./components/PopularBattle.js";
import Favorites from "./components/Favorites.js";

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter> 
        <div>
          <nav className = "">  
            <ul>
              <li className = ""><Link to="/">Home</Link></li> 
              <li className = ""><Link to="/Weekly">Weekly</Link></li>
              <li className = ""><Link to="/WeeklyBattle">WeeklyBattle</Link></li>
              <li className = ""><Link to="/Popular">Popular</Link></li>
              <li className = ""><Link to="/PopularBattle">PopularBattle</Link></li>
              <li className = ""><Link to="/Favorites">Favorites</Link></li>
            </ul>
          </nav>

          <Switch> 
            <Route exact path="/" component={Home}/> 
						<Route exact path="/Weekly" component={Weekly}/>
            <Route exact path="/WeeklyBattle" component={WeeklyBattle}/>
            <Route exact path="/Popular" component={Popular}/>
            <Route exact path="/PopularBattle" component={PopularBattle}/>
            <Route exact path="/Favorites" component={Favorites}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;