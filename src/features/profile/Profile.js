import React, {useEffect} from "react";
import classes from "./Profile.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useAuthRedirect} from "../../utils/useAuthRedirect";
import {Preloader} from "../../ui";
import {ProfileInfo} from "./ui/organisms/ProfileInfo/ProfileInfo";
import {MyPosts} from "./ui/organisms/MyPosts/MyPosts";
import * as profileActions from "./modules/profile/actions";
import profileCommon from "./ui/assets/profileCommon.jpg";
import avatarUndefined from "./ui/assets/avatar-undefined.jpg"


export const Profile = ({selectedId}) => {

  useAuthRedirect();

  const dispatch = useDispatch();
  const {profile, authUserId, isFetching} = useSelector((state) => {
    return {
      profile: state.profile.profile,
      authUserId: state.auth.user.id,
      isFetching: state.init.isFetching
    }
  }, shallowEqual);


  let userId = selectedId || authUserId;


  useEffect(() => {
    dispatch(profileActions.getUser(userId));
    dispatch(profileActions.getStatus(userId));
  }, [userId, dispatch]);


  return (
    <>
      {isFetching || !profile ?
        <Preloader/> :
        (
          <main className={classes.content}>
            <ProfileInfo authUserId={authUserId} profile={profile}
              userId={userId}
              head_img={profileCommon}
              myAva_img={profile.photos.small || avatarUndefined}
            />
            <MyPosts/>
          </main>
        )}
    </>
  );
};
