import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authUser} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials: true
    }).then((response) => {
      this.props.authUser(response.data.data);
    });
  }

  render() {
    return <Header user={this.props.user}/>;
  }

}

let MapStateToProps = (state) => {
  return {
    user: state.authUser.user
  };
};

export default connect(MapStateToProps, {
  authUser
})(HeaderContainer);
