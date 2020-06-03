import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unFollowAC,
  setUsersAC,
  countTotalUsersAC,
  setCurentPageAC,
} from "../../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    curentPage: state.usersPage.curentPage,
    pageSize: state.usersPage.pageSize,
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
    countTotalUsers: (totalCount) => {
      dispatch(countTotalUsersAC(totalCount));
    },
    setCurentPage: (curentPage) => {
      dispatch(setCurentPageAC(curentPage));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
