import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authUser} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.login().then((data) => {
      this.props.authUser(data.data);
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
