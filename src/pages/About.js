import React, { Component } from "react";
import "./About.css";
import profile_pic from '../assets/75235E9D-53BC-44A9-8427-2DF10DCF0729.jpeg';

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              Tell us about yourself in a few sentences. Tell us your interests
              and say a fun fact about yourself.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
