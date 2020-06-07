import {Header} from "../organisms/Header/Header";
import {Navbar} from "../organisms/Navbar/Navbar";
import React from "react";


export const CommonTemplate = ({children}) => {
  return (
    <>
      <Header/>
      <Navbar/>
        <div className="app-wrapper-content">
          {children}
        </div>
    </>
  )
};