import * as axios from "axios";
import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ?
      this.props.match.params.userId : 2;
    usersAPI.getUser(userId)
      .then((data) => this.props.setUsersProfile(data));
  }


  render() {
    return <Profile profile={this.props.profile}/>;
  }
}

let MapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile
  };
};

export default connect(MapStateToProps,
  {setUsersProfile})(
  withRouter(ProfileContainer));
