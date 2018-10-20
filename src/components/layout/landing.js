import React, { Component } from "react";
import Newmember from "./newMember";
import Existing from "./existing";
class Landing extends Component {
  render() {
    return (
      <div className="landing__wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12 m5 l5">
              <Newmember />
            </div>
            <div className="col s12 m2 l2">
              {" "}
              <h3 className="center-align">OR</h3>
            </div>
            <div className="col s12 m5 l5">
              <Existing />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
