// import React, { Component } from 'react';
// // import Nav from "./components/Nav";

// class FaceBookBtn_C extends Component {
//   state = {
// user: null,
//   }

  
//   render() {

//     const responseFacebook = (response) => {
//       console.log(response);
//     }

//     return (
//       <div className="App">
//         <div className="container">
//         <center><div class="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true"></div> </center>       
//         {/* <FacebookLogin
//     appId="355803105005829"
//     autoLoad={true}
//     fields="name,email,picture"
//     onClick={componentClicked}
//     callback={responseFacebook} />, */}
        
//         </div>
//       </div>

//     );
//   }
// }

// export default FaceBookBtn_C;

import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
// import Profile_C from "./Profile_C";


export default class FaceBookBtn_C extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
  
  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        // <Profile_C>
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
            // visibility: "hidden"
          }}
        > 
          <img 
          style={{
            width: "300px",
            margin: "auto",
            padding: "5px",
            // visibility: "hidden"
          }} src={this.state.picture} alt={this.state.name} />
          <h2> {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      // </Profile_C>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="355803105005829"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

