import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import MainHome from "./components/pages/main";
import Home from "./components/pages/Home";
import Newregister from "./components/pages/NewRegister";
import Existingregister from "./components/pages/Existing";
import Login from "./components/pages/Login";
import UserAdmin from "./components/pages/userAdmin";
import $ from "jquery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/registernew" component={Newregister} />
          <Route exact path="/registerexisting" component={Existingregister} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/hyveadmin" component={UserAdmin} />
        </Switch>
      </div>
    );
  }
}

export default App;
