import { addPostActionCreator } from "../../../redux/profileReducer";
import { textPostChangeCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    curentPostText: state.profilePage.curentPostText,
    postData: state.profilePage.PostData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updadePostText: (text) => {
      let action = textPostChangeCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
