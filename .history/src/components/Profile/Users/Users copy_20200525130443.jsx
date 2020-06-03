import React, { Component } from "react";
import "./Users.css";
import Axios from "axios";
import userPhoto from "../../../images/userPhoto.png";

class Users extends Component {
  constructor(props) {
    super(props);
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        debugger;
        props.setUsers(response.data.items);
      }
    );
  }
}

export default Users;
