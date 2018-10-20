import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.svg";
class Existingregister extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m12 l12">
          <div className="container">
            <div className="card card__form">
              <div className="top__section green">
                <div className="facebook">
                  <Link className="fa fa-facebook" to="#" />
                </div>
              </div>
              <div className="avatar">
                <img
                  src={avatar}
                  alt="user avatar"
                  className="circle responsive-img"
                />
              </div>
              <div className="card-content">
                <form action="">
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label htmlFor="icon_prefix">Full Name:</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="RegNo">Enter Reg Number:</label>
                    <input type="number" id="RegNo" className="validate" />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">cake</i>
                    <input
                      type="text"
                      id="DOB"
                      className="validate datepicker"
                      placeholder="Choose Your Date of Birth"
                    />
                  </div>
                  <div class="input-field">
                    <i className="material-icons prefix">wc</i>
                    <select>
                      <option value="" disabled selected>
                        Choose your Gender
                      </option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">school</i>
                    <label htmlFor="Dept" className="active">
                      Enter Your Department:
                    </label>
                    <input type="text" id="Dept" className="validate" />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">swap_vert</i>
                    <select>
                      <option value="" disabled selected>
                        Choose your Level
                      </option>
                      <option value="1">100l</option>
                      <option value="2">200l</option>
                      <option value="2">300l</option>
                      <option value="2">400l</option>
                      <option value="2">500l</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="password" className="active">
                      Enter Password:
                    </label>
                    <input type="text" id="password" className="validate" />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="checkPass" className="active">
                      Re-Type Password:
                    </label>
                    <input type="text" id="checkPass" className="validate" />
                  </div>
                  <input
                    type="submit"
                    className="btn waves-effect waves-light green"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Existingregister;
