import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // on importe les outils du router
import Movie from "./components/Movie.js";
import Home from "./components/Home.js";

import moviedata from './moviedata.json';

// import PageNotFound from "./components/PageNotFound.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
// 

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <nav>
          {/* <h1> Choose Your Movie</h1>  */}
            {/* <Home /> */}

          </nav>

          <Switch>

            <Route exact path="/" render={() => <Home moviedata={moviedata} />} ></Route>

            <Route exact path="/:id" render={(props) => <Movie {...props} moviedata={moviedata} />} ></Route>

          </Switch>
      </BrowserRouter>
    );
  }
}
export default App;