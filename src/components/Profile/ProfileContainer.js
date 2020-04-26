import React, {Component} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
  getStatus, getUser, setStatus, updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ?
      this.props.match.params.userId : this.props.id;
    this.props.getStatus(userId);
    this.props.getUser(userId);
  }

  render() {
    return <Profile
      id={this.props.match.params.userId || this.props.id}
      profile={this.props.profile}
      status={this.props.status} getStatus={this.props.getStatus}
      setStatus={this.props.setStatus}
      updateStatus={this.props.updateStatus}/>;
  }
}


let MapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    id: state.authUser.user.id
  };
};

export default compose(connect(MapStateToProps, {
    getUser,
    setStatus,
    getStatus,
    updateStatus
  }), withRouter,
  withAuthRedirect
)(ProfileContainer);
