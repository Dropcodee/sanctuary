import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Sanctuary.png";
class UserNav extends Component {
  render() {
    return (
      <div>
        <div>
          <ul id="sidenav-1" className="sidenav sidenav-fixed">
            <li>
              <div className="">
                <img
                  src={logo}
                  alt="Sanctuary Logo"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </li>
            <li className="push__down">
              <Link
                to="/hyveadmin"
                className="waves-effect waves-dark green white-text"
                id="btnHome"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hyveadmin"
                className="waves-effect waves-dark "
                id="btnProfile"
              >
                Edit Profile
              </Link>
            </li>
            <li>
              <Link
                to="/hyveadmin"
                className="waves-effect waves-dark "
                id="btnCalendar"
              >
                Calendar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserNav;
