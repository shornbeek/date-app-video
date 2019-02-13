import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header";
import Profile_C from "./component/Profile_C";
// import Nav from "./component/Nav";
import MatchCard_C from "./component/MatchCard_C";
// import FaceBookBtn_C from "./component/FaceBookBtn_C";
import Find_C from "./component/Find_C";
import Home_C from "./component/Home_C";
import Video_C from "./component/Video_C";
import Nav_C from "./component/Nav_C";






class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <center> Tinder but better.</center>
         
          {/* <center><FaceBookBtn_C/></center> */}
          <Switch>
            <Route exact path="/" component={Home_C} />
            <Route exact path="/Find" component={Find_C} />
            <Route exact path="/Match" component={MatchCard_C}/>
            <Route exact path="/Profile" component={Profile_C} />
            <Route exact path="/Video" component={Video_C} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;