
import React, { Component } from 'react';
// import Nav from "./component/Nav";
// import FaceBookBtn_C from "./FaceBookBtn_C";
// import LoveBtn_C from "./src/component/loveBtn_C";
import Nav2_C from "./Nav2_C";
import userAPI from "../utils/userApi.js";

import FacebookLogin from "react-facebook-login";

class Profile_C extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
        age: "",
        description: "",
        gender: "",
        looking: ""
      };

      handleInputChangeAge = event => {
        this.setState({ age: event.target.value});
      }
      handleInputChangeDescription = event => {
        this.setState({ description: event.target.value});
      }
      handleInputChangeGender = event => {
        this.setState({ gender: event.target.value});
      }
      handleInputChangeLooking = event => {
        this.setState({ looking: event.target.value})
      }

      handleFormSubmit = event => {
        event.preventDefault();
        console.log(userAPI.findIfUserExists(3));
      }

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
    
        return <div>
        <Nav2_C/>
        {fbContent}            
        <div className="App">
        <div className="container">
        {/* <FaceBookBtn_C/> */}
        

        

        {/* <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Smiley face" width="100%" /> */}

            <div className="card mb-4">
           
                <div className="card-header">
                <center> <button>Find Love</button></center>

                </div>
                <div className="card-body">
                    <div className="content">
                    <form>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Age</label>
                        <input onChange={this.handleInputChangeAge} type="number" class="form-control" id="Age" placeholder="18"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Gender</label>
                        <select onChange={this.handleInputChangeGender} className="form-control" id="Gender">
                          <option value="" selected disabled>Please select</option>
                          <option>Man</option>
                          <option>Woman</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Tell us about yourself</label>
                        <textarea onChange={this.handleInputChangeDescription} className="form-control" id="Description" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Looking for</label>
                        <select onChange={this.handleInputChangeLooking} className="form-control" id="LookingFor">
                        <option value="" selected disabled>Please select</option>
                          <option>Men</option>
                          <option>Women</option>
                        </select>
                      </div>
                      <center><button type="submit" id="submit" onClick={this.handleFormSubmit}>Submit</button></center>
                      </form>
                    </div>

                    

                </div>
            </div>
            <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"></div>

            {/* <div class="fb-comment-embed" data-href="https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942" data-width="560" data-include-parent="false"></div> */}
            <div class="fb-save" data-uri="https://www.instagram.com/facebook/" data-size="large"></div>
            
        </div>
    </div></div>
        
    }
}



export default Profile_C;