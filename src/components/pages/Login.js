import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.svg";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      reg_no: "",
      password: "",
      login: {},
      error: {}
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Login = login => {
    axios
      .post("https://sanc-server.herokuapp.com/public/login", login)
      .then(result => {
        if (result.data.error) {
          this.setState({ login: result.data.error });
          console.log(this.state.login.err_text);
        } else {
          this.setState({ login: result.data.success });
          console.log(this.state.login.success_text);
          this.props.history.push("/hyveadmin");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  submit = e => {
    e.preventDefault();
    if (this.state.reg_no === "" || this.state.password === "") {
      const err = {
        reg_no: "Registration Number Required",
        password: "Password Required"
      };
      this.setState({ error: err });
      console.log(this.state.error);
    } else {
      const login = {
        reg_no: this.state.reg_no,
        password: this.state.password
      };
      this.Login(login);
    }
  };
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
                <form action="" onSubmit={this.submit}>
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
                    <span style={{ color: "#f00" }}>
                      {this.state.reg_no === "" ? this.state.error.reg_no : ""}
                      {this.state.login.err_text !== ""
                        ? this.state.login.err_text
                        : ""}
                    </span>
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
                  <button
                    type="submit"
                    className="btn waves-effect waves-light green"
                  >
                    Send
                  </button>
                  <span className="green-text right">
                    {this.state.login.success_text !== ""
                      ? this.state.login.success_text
                      : ""}
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
