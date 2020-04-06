import React from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";

export default function Profile(props) {
  return (
    <>
      {!props.profile ? (
        <Preloader />
      ) : (
        <main className={classes.content}>
          <ProfileInfo
            description={props.profile.fullName}
            head_img="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
            myAva_img={props.profile.photos.small}
          />
          <MyPostsContainer />
        </main>
      )}
    </>
  );
}
