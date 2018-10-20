import React from "react";
import logo from "../../img/Sanctuary.png";
import { Link } from "react-router-dom";
export default () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo center black-text">
          <img src={logo} alt="" style={{ width: "60px", height: "60px" }} />
        </Link>
        <ul className="right">
          <li>
            <Link to="/login" className="waves-effect waves-light btn green">
              {" "}
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
