import React from "react";
import { Link } from "react-router-dom";
import Existing from "../../img/existing.svg";
export default () => {
  return (
    <div>
      <div className="card">
        <Link to="/registerexisting">
          <div className="card-image waves-effect waves-light">
            <img src={Existing} alt="Existing member registration" />
            <span className="card-title black-text">Existing Members</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
