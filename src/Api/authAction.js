import axios from "axios";

// calls register api for new member registration
export const AddMember = (memberID, history) => {
  axios
    .post("https://sanc-server.herokuapp.com/public/add", memberID)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      console.log(err);
    });
};

//Calls login api for user login

export const UserLogin = (loginID, history, login_error) => {
  axios
    .post("https://sanc-server.herokuapp.com/public/login", loginID)
    .then(result => {
      if (result.data.error) {
        this.setState({ login: result.data.error });
        console.log(this.props.login_error.err_text);
      } else {
        history.push("/hyveadmin");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
