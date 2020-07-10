import React from "react";
import styles from "./UsersSearch.module.scss"

export const UsersSearch = ({searchTerm, onSearch, onChange}) => {
  return (

    <div className={styles.usersSearch}>
      <p><input autoComplete="off" onKeyDown={onSearch}
        placeholder="Find User" type="text"
        value={searchTerm} onChange={onChange}/>
        <i className="fa fa-search"></i>
      </p>
    </div>

  )
};