import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUser} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId ?
      this.props.match.params.userId : 2;
    this.props.getUser(userId);
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
  {getUser})(
  withRouter(withAuthRedirect(ProfileContainer)));
