import React, {useEffect} from "react";
import classes from "./Profile.module.scss";
import {Preloader} from "../common/preloader/Preloader";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getStatus, getUser} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts/MyPosts";
import {useAuthRedirect} from "../../utils/useAuthRedirect";


export const Profile = ({selectedId}) => {

  useAuthRedirect();

  const dispatch = useDispatch();
  const {profile, authUserId} = useSelector((state) => {
    return {
      profile: state.ProfilePage.profile,
      authUserId: state.authUser.user.id
    }
  }, shallowEqual);


  let userId = selectedId || authUserId;


  useEffect(() => {
    dispatch(getStatus(userId));
    dispatch(getUser(userId));
    return function () {
    }
  }, [selectedId]);


  return (
    <>
      {!profile ?
        (
          <Preloader/>
        ) :
        (
          <main className={classes.content}>
            <ProfileInfo authUserId={authUserId} profile={profile}
              userId={userId}
              head_img="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
              myAva_img={profile.photos.small ||
              "https://chat.europnet.org/assets/plugins/avatar-undefined.jpg"}
            />
            <MyPosts/>
          </main>
        )}
    </>
  );
}
