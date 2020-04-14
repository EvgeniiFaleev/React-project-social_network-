import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.login();
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
  login
})(HeaderContainer);
