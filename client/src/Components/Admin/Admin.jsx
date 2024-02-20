import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="container">
        <div className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="contacts">Contact</NavLink>
            </li>
            <li>
              <NavLink to="users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminPanel;
