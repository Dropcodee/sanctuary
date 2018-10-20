import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import logo from "../../img/Sanctuary.png";
import { Link } from "react-router-dom";

export default () => {
  const Mainbackground = styled.div`
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (min-width: 320px) {
      background-image: url(../../img/bg-tablet.svg);
    }
    @media screen and (min-width: 640px) {
      background-image: url(../../img/bg-tablet.svg);
    }
    @media screen and (min-width: 960px) {
      background-image: url(../../img/bg-desktop.svg);
    }
  `;
  const Hrline = styled.hr`
    padding: 1px;
    width: 15%;
    background: #4caf50;
    border: 0;
  `;

  return (
    <Mainbackground>
      <div className="container">
        <div className="landing__hero__wrapper">
          <div className="row">
            <div className="col s12 m12 l12">
              <img
                src={logo}
                alt=""
                style={{ width: "150px", height: "150px" }}
              />
              <div className="typed__text flow-text">
                <Typed
                  strings={[
                    "WELCOME TO SANCTUARY UNIT",
                    "WELCOME TO CHAPEL",
                    "WELCOME TO LANDMARK UNIVERSITY"
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
                <Hrline />
              </div>
            </div>
          </div>
          <div className="motto__wrapper">
            <h6>
              <i>MOTTO: SERVICE TO GOD</i>
            </h6>
            <Link to="/home">
              <button className="btn-large waves-effect waves-dark green ">
                {" "}
                Welcome
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Mainbackground>
  );
};
