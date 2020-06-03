import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC } from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unFollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    countTotalUsersAC: (totalCount)=>{
      
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
