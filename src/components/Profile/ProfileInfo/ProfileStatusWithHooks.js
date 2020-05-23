import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {updateStatus} from "../../../redux/profile-reducer";


export const ProfileStatusWithHooks = ({dispatch}) => {

  const userStatus = useSelector((state) => (
    state.ProfilePage.status
  ));

  let [status, setStatus] = useState(null);
  let [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(userStatus)
  }, [userStatus]);

  const onStatusChange = (e) => {
    dispatch(updateStatus(e.target.value));
    setEditMode(false);
  };

  return (
    <div className="">
      {editMode ? <textarea autoFocus={true}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={onStatusChange}
          value={status}/> :
        <p onClick={() => setEditMode(true)}>{userStatus || "no-" +
        " status"}</p>}
    </div>
  )
};
