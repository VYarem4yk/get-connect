import { usersAPI } from "../api/api";

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 5,
  curentPage: 1,
  isLoading: false,
  isFollowingInProgress: false,
  followingDisabledUserID: [],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return { ...state, curentPage: action.curentPage };
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingDisabledUserID: action.isFollowingEnabled
          ? state.followingDisabledUserID.filter((id) => id != action.userID)
          : [...state.followingDisabledUserID, action.userID],
      };
    default:
      return state;
  }
};

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unFollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const countTotalUsers = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount,
});
export const setCurentPage = (curentPage) => ({
  type: SET_CURRENT_PAGE,
  curentPage,
});
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
export const toggleIsFollowingEnabled = (isFollowingEnabled, userID) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  isFollowingEnabled: isFollowingEnabled,
  userID,
});

export const getUsers = (curentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    usersAPI.getUsers(curentPage, pageSize).then((data) => {
      dispatch(toggleIsLoading(false));
      dispatch(setUsers(data.items));
      dispatch(countTotalUsers(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingEnabled(false, userId));
    usersAPI.followUsers(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(followSuccess(userId));
        dispatch(toggleIsFollowingEnabled(true, userId));
      }
    });
  };
};

export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingEnabled(false, userId));
    usersAPI.unfollowUsers(userId).then((data) => {
      if (data.resultCode == 0) {
        dispatch(unFollowSuccess(userId));
        dispatch(toggleIsFollowingEnabled(true, userId));
      }
    });
  };
};

export default usersReducer;
