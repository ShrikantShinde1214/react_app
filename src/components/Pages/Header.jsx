import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../Design/Header.css";

const Header = () => {
  return (
    <React.Fragment> 
    {/*<React.Fragment></React.Fragment> to avoid the Unnecessary div element */}
      <nav>
        <ul>
          <li className="schedule-link">
            <Link to="/" className=" Active schedule text-decoration-none">SCHEDULE</Link>
          </li>
          <li className="category-link">
            <Link to="/category" className=" Active categogy text-decoration-none">CATEGORY</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  )
};

export default Header;