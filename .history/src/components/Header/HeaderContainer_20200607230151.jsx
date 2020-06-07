import React, { Component } from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import { setAuthorisation } from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    }).then((response) => {
      debugger;
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthorisation(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuthorised: state.isAuthorised,
  id: state.id,
  login: state.login,
  email: state.email,
});
const mapDispatchToProps = {
  ,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
