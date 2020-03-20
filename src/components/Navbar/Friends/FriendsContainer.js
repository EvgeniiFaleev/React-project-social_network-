import Friends from "./Friends";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

const FriendsContainer = connect(MapStateToProps)(Friends);
export default FriendsContainer;
