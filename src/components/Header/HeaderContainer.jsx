import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuthorised: state.authorization.isAuthorised,
  id: state.authorization.id,
  login: state.authorization.login,
  email: state.authorization.email,
});

export default connect(mapStateToProps, { login })(HeaderContainer);
