import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import SideBar from "../pages/SideBar.jsx";




const Layout = () => {
  return (
    <>
      <div className="layout" >
    <div className="layout-container" >
      <SideBar />
      <NavBar />
      {/* <div className="main-content"> */}
        </div>
        
        

        <Outlet />
        
        {/* </div> */}
      </div>

     {/* </div> */}

      


    </>
  );
}

export default Layout;