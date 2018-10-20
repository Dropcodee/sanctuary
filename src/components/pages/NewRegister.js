import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.svg";
import { AddMember } from "../../Api/authAction";
class Newregister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      reg_no: "",
      webmail: "",
      dob: "",
      sex: "",
      dept: "",
      level: "",
      password: "",
      con_password: "",
      hall: "",
      room: "",
      reasons: "",
      error: {},
      newMember: {}
    };
  }

  // Creates a static property
  static defaultProps = {
    sex: ["Select gender", "Male", "Female"],
    level: ["Select level", "100", "200", "300", "400", "500"],
    dept: [
      "Select Department",
      "ACCOUNTING",
      "AGRICULTURAL ECONOMICS",
      "AGRICULTURAL ENGINEERING",
      "AGRICULTURAL EXTENSION AND RURAL DEVELOPMENT",
      "ANIMAL SCIENCE",
      "APPLIED BIOLOGY & BIOTECHNOLOGY",
      "AQUACULTURE & FISHERIES MANAGEMENT",
      "BANKING AND FINANCE",
      "BIOCHEMISTRY",
      "BUSINESS ADMINISTRATION",
      "CHEMICAL ENGINEERING",
      "CIVIL ENGINEERING",
      "COMPUTER SCIENCE",
      "CROP SCIENCE",
      "ECONOMICS",
      "ELECTRICAL AND INFORMATION ENGINEERING",
      "FOOD SCIENCE & NUTRITION",
      "GEOPHYSICS",
      "INDUSTRIAL CHEMISTRY",
      "INDUSTRIAL CHEMISTRY (MATERIAL SCIENCE & POLYMER CHEMISTRY)",
      "INDUSTRIAL MATHEMATICS",
      "INTERNATIONAL RELATIONS",
      "MASS COMMUNICATION",
      "MATHEMATICS (WITH COMPUTER SCIENCE)",
      "MATHEMATICS (WITH STATISTICS)",
      "MECHANICAL ENGINEERING",
      "MECHATRONICS ENGINEERING",
      "MICROBIOLOGY",
      "PHYSICS (WITH ELECTRONICS)",
      "PHYSICS (WITH RENEWABLE ENERGY)",
      "POLITICAL SCIENCE",
      "SOCIOLOGY"
    ],
    hall_male: [
      "Select Hall of Residence",
      "Daniel Hall",
      "Abraham Hall",
      "Joseph Hall",
      "Isaac Hall"
    ],
    hall_female: [
      "Select Hall of Residence",
      "Dorcas Hall",
      "Sarah Hall",
      "Deborah Hall",
      "Abigal Hall"
    ]
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Function to Send new Member to the back-end

  // Submit Function for the form
  submit = e => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.reg_no === "" ||
      this.state.webmail === "" ||
      this.refs.dob.value === "" ||
      this.state.sex === "" ||
      this.state.dept === "" ||
      this.state.level === "" ||
      this.state.hall === "" ||
      this.state.room === "" ||
      this.state.password === "" ||
      this.state.con_password === "" ||
      this.state.reasons === ""
    ) {
      const err = {
        error: "All Fields are required"
      };
      this.setState({ error: err });
    } else if (this.state.password === this.state.con_password) {
      // var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
      if (this.state.password < 8) {
        const err = {
          error: "Password must be above 8 characters"
        };
        this.setState({ error: err });
      }

      // re = /[0-9]/;
      else if (!/[0-9]/.test(this.state.password)) {
        const err = {
          error: "Password must contain at least one number (0-9)"
        };
        this.setState({ error: err });
      }

      // re = /[a-z]/;
      else if (!/[a-z]/.test(this.state.password)) {
        const err = {
          error: "Password must contain at least one lowercase letter (a-z)"
        };
        this.setState({ error: err });
      }

      // re = /[A-Z]/;
      else if (!/[A-Z]/.test(this.state.password)) {
        const err = {
          error: "Password must contain at least one uppercase letter (A-Z)"
        };
        this.setState({ error: err });
      }

      // Check if the Password is the same with the name
      else if (this.state.password === this.state.name) {
        const err = {
          error: "Password must be the same character with your name"
        };
        this.setState({ error: err });
      }

      // Put the member in an Object
      else {
        const newMem = {
          name: this.state.name,
          reg_no: this.state.reg_no,
          webmail: this.state.webmail,
          dob: this.refs.dob.value,
          sex: this.state.sex,
          dept: this.state.dept,
          level: this.state.level,
          hall: this.state.hall,
          room: this.state.room,
          password: this.state.con_password,
          reasons: this.state.reasons,
          membership: "New Member"
        };
        console.log(newMem);

        AddMember(newMem, this.props.history);
      }
    } else {
      const err = {
        error: "Confirm Password must be valid"
      };
      this.setState({ error: err });
    }
    console.log(this.state.error);
  };
  render() {
    let sex = this.props.sex.map(sex => {
      return (
        <option key={sex} value={this.state.value}>
          {sex}
        </option>
      );
    });
    let level = this.props.level.map(level => {
      return (
        <option key={level} value={this.state.value}>
          {level}
        </option>
      );
    });

    let dept = this.props.dept.map(dept => {
      return (
        <option key={dept} value={this.state.value}>
          {dept}
        </option>
      );
    });

    let hall_male = this.props.hall_male.map(hall_male => {
      return (
        <option key={hall_male} value={this.state.value}>
          {hall_male}
        </option>
      );
    });

    let hall_female = this.props.hall_female.map(hall_female => {
      return (
        <option key={hall_female} value={this.state.value}>
          {hall_female}
        </option>
      );
    });
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
                <form action="" onSubmit={this.submit}>
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <label htmlFor="name">Full Name:</label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="RegNo">Enter Reg Number:</label>
                    <input
                      type="number"
                      id="RegNo"
                      className="validate"
                      name="reg_no"
                      value={this.state.reg_no}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">assignment_ind</i>
                    <label htmlFor="webmail">Enter Webmail:</label>
                    <input
                      type="email"
                      id="webmail"
                      className="validate"
                      name="webmail"
                      value={this.state.webmail}
                      onChange={this.onChange}
                    />
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Helper text
                    </span>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">cake</i>
                    <label htmlFor="dob" className="active">
                      Enter Your Date of Birth:
                    </label>
                    <input
                      type="text"
                      id="DOB"
                      className="validate datepicker"
                      placeholder="Choose Your Date of Birth"
                      name="dob"
                      ref="dob"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">wc</i>
                    <select onChange={this.onChange} name="sex">
                      {sex}
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">school</i>
                    <select onChange={this.onChange} name="dept">
                      {dept}
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">swap_vert</i>
                    <select onChange={this.onChange} name="level">
                      {level}
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">location_city</i>
                    <select onChange={this.onChange} name="hall">
                      <optgroup label="Male Hostel">{hall_male}</optgroup>
                      <optgroup label="Female Hostel">{hall_female}</optgroup>
                    </select>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix">location_city</i>
                    <label htmlFor="room" className="active">
                      Enter Room Number:
                    </label>
                    <input
                      type="text"
                      id="room"
                      className="validate"
                      name="room"
                      value={this.state.room}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> bubble_chart</i>
                    <textarea
                      id="reasons"
                      className="materialize-textarea"
                      name="reasons"
                      value={this.state.reasons}
                      onChange={this.onChange}
                    />
                    <label htmlFor="reasons">
                      Enter Your Reasons for joining Sanctuary Unit
                    </label>
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="password" className="active">
                      Enter Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="validate"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="material-icons prefix"> lock_outline</i>
                    <label htmlFor="checkPass" className="active">
                      Re-Type Password:
                    </label>
                    <input
                      type="password"
                      id="checkPass"
                      className="validate"
                      name="con_password"
                      value={this.state.con_password}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn waves-effect waves-light green">
                    Join Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newregister;
