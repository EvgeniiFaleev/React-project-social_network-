import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

let MapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.authUser.user.isAuth
  };
};


const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"}/>;
      return <Component  {...this.props}/>
    }

  }

  return connect(MapStateToPropsForRedirect)(RedirectComponent);
};
export default withAuthRedirect;