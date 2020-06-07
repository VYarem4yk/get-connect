import React, { Component } from "react";
import Header from "./Header";
import Axios from "axios";
import { connect } from "react-redux";
import setAuthorisation from "../../redux/authReducer";

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    }).then((response) => {
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setAuthorisation,
};

export default connect(mapStateToProps,mapD)(HeaderContainer);
