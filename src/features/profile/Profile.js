import React, {useEffect} from "react";
import classes from "./Profile.module.scss";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useAuthRedirect} from "../../utils/useAuthRedirect";
import {Preloader} from "../../ui";
import {ProfileInfo} from "./ui/organisms/ProfileInfo/ProfileInfo";
import {MyPosts} from "./ui/organisms/MyPosts/MyPosts";
import {profileActions} from "./modules/profile";


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
      { isFetching || !profile ?
          <Preloader/> :
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
};
