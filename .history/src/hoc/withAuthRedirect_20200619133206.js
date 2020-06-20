import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuthorised: state.authorization.isAuthorised,
  });

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthorised) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }
 
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};
