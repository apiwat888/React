import React from 'react'
import Home1 from "./Home1";
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout1 = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>


    </div>
  )
}

export default Layout1
