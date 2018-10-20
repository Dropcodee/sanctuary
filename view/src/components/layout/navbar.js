import React from "react";
import HomeNav from "./homeNav";
export default () => {
  let Navigation;
  if (
    window.location.pathname === "/home" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/registernew" ||
    window.location.pathname === "/registerexisting"
  ) {
    Navigation = <HomeNav />;
  } else if (
    window.location.pathname === "/hyveadmin" ||
    window.location.pathname === "/"
  ) {
    Navigation = "";
  } else {
    Navigation = <HomeNav />;
  }
  return <div>{Navigation}</div>;
};
