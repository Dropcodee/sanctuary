import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Existing from "../../img/Existing.svg";
export default () => {
  const Image = styled.div`
    text-align: center;
    img {
      margin: 0 auto;
      width: 350px;
      height: 350px;
    }
    @media screen and (min-width: 320px) {
      img {
        width: 250px;
        height: 250px;
      }
    }
    @media screen and (min-width: 640px) {
      img {
        width: 250px;
        height: 250px;
      }
    }
    @media screen and (min-width: 980px) {
      img {
        width: 380px;
        height: 350px;
      }
    }
  `;
  return (
    <div>
      <div className="">
        <Link to="/registerexisting">
          <Image className=" card-image waves-effect waves-light">
            <img src={Existing} alt="Existing member registration" />
          </Image>
        </Link>
      </div>
    </div>
  );
};
