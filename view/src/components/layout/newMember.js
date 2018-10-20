import React from "react";
import { Link } from "react-router-dom";
import Newmember from "../../img/new.svg";
export default () => {
  return (
    <div>
      <div className="card">
        <Link to="/registernew">
          <div className="card-image waves-effect waves-light">
            <img
              src={Newmember}
              alt="new member registration"
              className="landing__logo"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
