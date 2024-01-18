import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="left-sidebar" />
      <Outlet />
      <div className="right-sidebar" />
    </>
  );
}

export default Layout;