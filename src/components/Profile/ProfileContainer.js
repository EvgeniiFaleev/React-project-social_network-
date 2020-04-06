import * as axios from "axios";
import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUsersProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ?
      this.props.match.params.userId :
      2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/
                ${userId}`)
      .then((response) => this.props.setUsersProfile(response.data));
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
