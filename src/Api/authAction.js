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

export const UserLogin = (loginID, history) => {
  axios
    .post("https://sanc-server.herokuapp.com/public/login", loginID)
    .then(result => {
      history.push("/hyveadmin");
    })
    .catch(err => {
      console.log(err);
    });
};
