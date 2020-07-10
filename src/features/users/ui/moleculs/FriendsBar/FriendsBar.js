import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./FriendsBar.module.scss"
import {Preloader} from "../../../../../ui";
import avatar_undefined
  from "../../../../../ui/assets/images/avatar-undefined.jpg"
import {Link, NavLink} from "react-router-dom";
import {usersActions} from "../../../modules/users";


export const FriendsBar = ({clearPage}) => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(usersActions.getFriendsDemo(6, 1));
  }, [dispatch]);

  const friends = useSelector((state) => state.users.friends);

  const friendsElements = friends.map((friend) => {
    return (
      <div className={styles.friend}>
        <Link to={`/profile/${friend.id}`}>
          <img className={styles.friendPhoto}
            src={friend.photos?.small || avatar_undefined}
            alt=""/>
          <p className={styles.friendName}>{friend.name}</p>
        </Link>
      </div>
    )
  });
  return (
    <>

      {friends.length === 0 ?
        <Preloader/> :
        <aside className={styles.friendsBar}>
          <h3 onClick={clearPage}><NavLink activeClassName={styles.active}
            to="/friends">Friends</NavLink></h3>
          <div className={styles.friendInfo}>
            {friendsElements}
          </div>
        </aside>}
    </>
  )
};