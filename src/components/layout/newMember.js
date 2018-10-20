import React from "react";
import { Link } from "react-router-dom";
import Newmember from "../../img/new.svg";
import styled from "styled-components";
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
        width: 512px;
        height: 350px;
      }
    }
  `;
  return (
    <div>
      <div className="">
        <Link to="/registernew">
          <Image className=" waves-effect waves-light">
            <img src={Newmember} alt="new member registration" />
          </Image>
        </Link>
      </div>
    </div>
  );
};
