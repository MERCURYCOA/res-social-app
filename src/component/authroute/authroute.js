import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ["/login", "/register"];
    const pathname = this.props.location.pathname;
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    // Get user data
    axios.get("/user/info").then(res => {
      if (res.status == 200) {
        // if (res.data.code == 0) {
        //   // there is login info
        // } else {
        //   this.props.history("/login");
        // }
        console.log(res.data);
      }
    });
    // Is login
    // current url
    // user type
    // is info completed
  }
  render() {
    return null;
  }
}

export default withRouter(AuthRoute);
