import React from "react";
import Logo from "../../component/logo/logo";
import {
  WingBlank,
  Whitespace,
  InputItem,
  List,
  Button,
  Radio
} from "antd-mobile/lib/";
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";
// @connect(
//   state=>state.user,
//   {register}
// )
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      type: "genius"
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  handleRegister() {
    this.props.register(this.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo />
        <List>
          {this.props.msg ? (
            <p className="error-msg">{this.props.msg}</p>
          ) : null}
          <InputItem onChange={v => this.handleChange("user", v)}>
            Username
          </InputItem>
          <InputItem
            type="password"
            onChange={v => this.handleChange("pwd", v)}
          >
            Password
          </InputItem>
          <InputItem
            type="password"
            onChange={v => this.handleChange("repeatpwd", v)}
          >
            Comfirm password
          </InputItem>
          <RadioItem
            checked={this.state.type === "genius"}
            onChange={() => this.handleChange("type", "genius")}
          >
            Genius
          </RadioItem>
          <RadioItem
            checked={this.state.type === "boss"}
            onChange={() => this.handleChange("type", "boss")}
          >
            Boss
          </RadioItem>
          <Button type="primary" onClick={this.handleRegister}>
            Register
          </Button>
        </List>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(
  // state => state.user,
  mapStateToProps,
  { register }
)(Register);
