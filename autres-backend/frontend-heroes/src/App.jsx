import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Switch, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './views/Signup'
import Login from './views/Login'
import Admin from './views/Admin'
import Home from './views/Home'

function App() {
    const history = useHistory()
    const [userConnected, setUserConnected] = useState(false);
    const [informDisconnection, setInformDisconnection] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token") || false

        if (token) {
            setUserConnected(true)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setUserConnected(false)
        setInformDisconnection(true)

        setTimeout(() => setInformDisconnection(false), 10000)
    }

    return (
        <BrowserRouter>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">Heroes</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                {userConnected &&
                                    <li className="nav-item">
                                        <Link to="/admin" className="nav-link">Admin</Link>
                                    </li>
                                }
                            </ul>
                            <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                                {!userConnected ?
                                    <>
                                        <li className="nav-item">
                                            <Link to="/signup" className="nav-link">Signup</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" onClick={logout}>Logout</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>

                {informDisconnection &&
                    <div className="row">
                        <div className="offset-3 col-6 mx-auto">
                            <div className="alert alert-danger" role="alert">
                                Your session was disconnected! Please try loging in again
                            </div>
                        </div>
                    </div>
                }

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login">
                        <Login changeUserConnected={setUserConnected} />
                    </Route>
                    <Route path="/admin">
                        <Admin disconnectUser={logout} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
