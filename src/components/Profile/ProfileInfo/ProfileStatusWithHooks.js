import React, {useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props) => {
  let [status, setStatus] = useState(null);
  let [editMode, setEditMode] = useState(false);
  useEffect(() => {
    setStatus(props.status)}, [props.status]);

  const onStatusChange = (e) =>{
    props.updateStatus(e.target.value);
    setEditMode(false);
  };

  return (
    <div className="">
      {editMode ? <textarea autoFocus={true}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={onStatusChange}
          value={status}/> :
        <p onClick={() => setEditMode(true)}>{props.status || "no-" +
        " status"}</p>}
    </div>
  )
};
