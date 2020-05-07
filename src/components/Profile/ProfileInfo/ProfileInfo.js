import React from "react";
import classes from "./ProfileInfo.module.scss";
import ProfileStatus from "./ProfileStatus"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


export default class ProfileInfo extends React.Component {
  render() {
    return (
      <div className={classes.profileInfo}>
        <img className={classes.head_image} src={this.props.head_img}/>
        <div className={classes.bio}>
          <img className={classes.myAva} src={this.props.myAva_img}/>
          <div
            className={classes.description}>{this.props.description}</div>
        </div>
        <ProfileStatusWithHooks updateStatus={this.props.updateStatus} id={this.props.id} getStatus={this.props.getStatus} setStatus={this.props.setStatus} status={this.props.status}/>
      </div>
    );
  }
}
