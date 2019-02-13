import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import Nav from "./components/Nav";

class Nav3_C extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
{/* //                 <nav className="navbar navbar-inverse">
//   <div className="container-fluid">
//     <div className="navbar-header">
//       <a className="navbar-brand" href="#">WebSiteName</a>
//     </div>
//     <ul className="nav navbar-nav">
//       <li className="active"><a href="#">Home</a></li>
//       <li><a href="#">Page 1</a></li>
//       <li><a href="#">Page 2</a></li>
//     </ul>
//     <ul className="nav navbar-nav navbar-right">
//       <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
//       <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
//     </ul>
//   </div>
// </nav> */}

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
                                            to="/Find"
                                            className={window.location.pathname === "/Find" ? "nav-link active" : "navbar-right nav-link" }>
                                            Find
                                </Link>

                        </ul>
                    </nav> 
                </div>
            </div>

        );
    }
}

export default Nav3_C;
