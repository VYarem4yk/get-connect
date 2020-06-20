import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

export const withAuthRedirect = (Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuthorised) return <Redirect to={"/login"} />;
            return <C {...props} />;
        }
    }
}