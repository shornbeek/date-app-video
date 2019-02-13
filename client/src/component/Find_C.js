import React, { Component } from 'react';
import Nav_C from "./Nav_C";
import "./styleFind.css";
// import Nav_C from "./component/Nav_C";



class Find_C extends Component {
    render() {
        return (
           
            <div className="App">
                <div className="container">
                <Nav_C/>
                
                    <img src="http://reductress.com/wp-content/uploads/2016/10/woman-coffee-820x500.jpg" alt="Smiley face" width="100%" />


                    <div className="card mb-4">
                        <div className="card-header">
                            {/* <button>Wink</button> */}

                        </div>
                        <div className="card-body">
                            <div className="content">
                                <ul>
                                    <li>
                                        <strong>Name:</strong>
                                        {/* <Link to="/Find">About</Link> */}
                                    </li>
                                    <li>
                                        <strong>Occupation:</strong>
                                    </li>
                                    <li>
                                        <strong>Location:</strong>
                                    </li>
                                </ul>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    {/* <button>No</button> */}
                                    <div className="toggle">
                                        <input type="checkbox"  />
                                        <span className="button"></span>
                                        <span className="label">+</span>
                                    </div>

                                </div>
                                <div className="col-6">
                                    {/* <button>Yes</button> */}
                                    <div className="toggle">
                                        <input type="checkbox"  />
                                        <span className="button"></span>
                                        <span className="label">–</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default Find_C;