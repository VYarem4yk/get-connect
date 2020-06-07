import React, { Component } from "react";
import Header from "./Header";
import Axios from "axios";

class HeaderContainer extends Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(
      (response) => {
       
{id, login, email}=response.data.data
        this.props.setAuthorisation(response.data.data.);
        this.props.countTotalUsers(response.data.totalCount);
      }
    );
  }

  render() {
    return <Header {...this.props} />;
  }
}

export default HeaderContainer;
