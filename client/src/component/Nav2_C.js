import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import Nav from "./components/Nav";

class Nav2_C extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                <nav className="navbar navbar-light ">
                        <ul className="nav nav-tabs">

                                    <Link
                                        to="/Match"
                                        className={window.location.pathname === "/Match" ? "nav-link active" : "nav-link"}
                                    >
                                        Match
                                </Link>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">

                                   
                                        <Link
                                            to="/Find"
                                            className={window.location.pathname === "/Find" ? "nav-link active" : "navbar-right" }>
                                            Find
                                </Link>

                        </ul>
                    </nav> 
                </div>
            </div>

        );
    }
}

export default Nav2_C;
