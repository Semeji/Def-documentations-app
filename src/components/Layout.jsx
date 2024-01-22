import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import SideBar from "../pages/SideBar.jsx";
import Screens from "../pages/Screens.jsx";




const Layout = () => {
  return (
    <>
    <div className="layout-container" >
      <SideBar />
      <div className="main-content">
        <NavBar />
        <div className="right-sidebar" >

        <Outlet />
        <Screens />
        </div>
      </div>

     </div>



    </>
  );
}

export default Layout;