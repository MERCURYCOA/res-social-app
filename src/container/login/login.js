import React from "react";
import Logo from "../../component/logo/logo";
// import { List, Input, Button } from "antd";
import { WingBlank, InputItem, List, Button } from "antd-mobile";
// "antd-mobile/lib/"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }
  register() {
    console.log(this.props);
    this.props.history.push("/register");
  }

  render() {
    return (
      <div>
        <Logo />
        <h2>Login Page</h2>
        <WingBlank>
          <List>
            <InputItem>Username</InputItem>
            <InputItem>Password</InputItem>
          </List>
          <Button type="primary">Login</Button>
          {/* <Whitespace /> */}
          <Button onClick={this.register} type="primary">
            Register
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
