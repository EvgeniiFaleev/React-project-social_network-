import { connect } from "react-redux";
import {
  followUserAC,
  setUsersAC,
  unFollowUserAC
} from "../../redux/friends-reducer";
import Users from "./Users";

let MapStateToProps = (state) => {
  return {
    users: state.FriendsPage.users
  };
};
let MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followUserAC(userId)),
    unFollow: (userId) => dispatch(unFollowUserAC(userId)),
    setUsers: (response) => dispatch(setUsersAC(response))
  };
};
let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);

export default UsersContainer;
