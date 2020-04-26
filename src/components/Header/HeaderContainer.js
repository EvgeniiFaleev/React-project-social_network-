import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

  render() {
    return <Header logout={this.props.logout} user={this.props.user}/>;
  }

}

let MapStateToProps = (state) => {
  return {
    user: state.authUser.user,
  };
};

export default connect(MapStateToProps, {
  logout
})(HeaderContainer);
