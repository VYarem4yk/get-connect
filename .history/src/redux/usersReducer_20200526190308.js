let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  curentPage: 1,
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {       
        {...state, ...action.users},
      };
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
    default:
      return state;
  }
};

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const countTotalUsersAC = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount,
});
export const setCurentPageAC = (curentPage) => ({
  type: SET_CURRENT_PAGE,
  curentPage,
});

export default usersReducer;