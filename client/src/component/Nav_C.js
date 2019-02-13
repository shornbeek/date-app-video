import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import Nav from "./components/Nav";

class Nav_C extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                <nav className="navbar navbar-light ">
                        <ul className="nav nav-tabs">

                                    <Link
                                        to="/Profile"
                                        className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}
                                    >
                                        Profile
                                </Link>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">

                                   
                                        <Link
                                            to="/Match"
                                            className={window.location.pathname === "/Match" ? "nav-link active" : "navbar-right" }>
                                            Match
                                </Link>

                        </ul>
                    </nav> 
                </div>
            </div>

        );
    }
}

export default Nav_C;
