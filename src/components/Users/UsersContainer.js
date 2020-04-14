import React from "react";
import {
  followUser, getUsers, unFollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {
  componentDidMount() {
    console.log("DIDMOUNT");
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
    console.log(`render`);
    return <Users
      onPageChanged={this.onPageChanged} {...this.props}
      onFollow={this.onFollow}
      onUnFollow={this.onUnFollow}/>;
  }
}

let MapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    isFollowing: state.UsersPage.isFollowing
  };
};

export default connect(MapStateToProps, {
  getUsers, followUser, unFollowUser
})(withAuthRedirect(UsersContainer));
