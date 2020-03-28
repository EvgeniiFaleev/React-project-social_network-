import SidebarFriends from "./SidebarFriends";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
  return {
    friends: state.Sidebar
  };
};

const SidebarFriendsContainer = connect(MapStateToProps)(SidebarFriends);
export default SidebarFriendsContainer;
