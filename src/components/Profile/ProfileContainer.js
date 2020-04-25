import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
  getStatus, getUser, setStatus, updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ?
      this.props.match.params.userId : 6913;
    this.props.getStatus(userId);
    this.props.getUser(userId);
  }

  render() {
    return <Profile
      id={this.props.match.params.userId || 6913}
      profile={this.props.profile}
      status={this.props.status} getStatus={this.props.getStatus}
      setStatus={this.props.setStatus}
      updateStatus={this.props.updateStatus}/>;
  }
}


let MapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status
  };
};

export default compose(connect(MapStateToProps, {
    getUser,
    setStatus,
    getStatus,
    updateStatus
  }), withRouter, // withAuthRedirect
)(ProfileContainer);
