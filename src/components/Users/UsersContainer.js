import React from "react";
import {
  followUser, getUsers, unFollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowing,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector, getUsersWithPhotoSelector
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }


  onPageChanged = (e) => {
    let pageNumber = e.target.textContent;
    this.props.getUsers(this.props.pageSize, pageNumber);

  };

  onFollow = (id) => {
    this.props.followUser(id);
  };

  onUnFollow = (id) => {
    this.props.unFollowUser(id);
  };

  render() {
    console.log(`renderUsers`);
    return <Users
      onPageChanged={this.onPageChanged} {...this.props}
      onFollow={this.onFollow}
      onUnFollow={this.onUnFollow}/>;
  }
}

let MapStateToProps = (state) => {
  console.log("MAPSTATETOPROPS USERS")
  return {
    users: getUsersWithPhotoSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage:getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state)
  };
};

export default compose(connect(MapStateToProps, {
  getUsers, followUser, unFollowUser
}), withAuthRedirect)(UsersContainer);
