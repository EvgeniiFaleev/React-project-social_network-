import React from "react";
import * as axios from "axios";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";


class UsersContainer extends React.Component {
  componentDidMount() {
    console.log("DIDMOUNT");
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${this.props.currentPage}`,
        {withCredentials: true})
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }


  onPageChanged = (e) => {
    this.props.toggleIsFetching(true);
    let pageNumber = e.target.textContent;
    this.props.setCurrentPage(pageNumber);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=
        ${this.props.pageSize}&page=${pageNumber}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  onFollow = (id) => {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {},
      {
        withCredentials: true, headers: {
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
        }
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.follow(id);
        }

      });
  }

  onUnFollow = (id) => {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      {
        withCredentials: true, headers: {
          "API-KEY": "46252d8e-8243-4294-910b-e99470877fd5"
        }
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.unFollow(id);
        }

      });
  }

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
    isFetching: state.UsersPage.isFetching
  };
};

export default connect(MapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
})(UsersContainer);
