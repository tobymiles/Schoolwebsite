import React from "react";
import Avatar from "../assets/img/Button.png";
import Logo from "../assets/img/Group 666.png";
import Icon from "../assets/img/Vector.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className='Navbar'>
      <div className='container'>
        <div className='navbar-link'>
          <img src={Logo} alt='' />
          <ul className='menu-links'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "Linkactive" : "")}
                to='/'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='form-avatar'>
          <form>
            <img src={Icon} alt='icon' id='icon' />
            <input type={"text"} placeholder='Search' />
          </form>
          <div id='avatar'>
            <img
              src={Avatar}
              alt=''
              style={{ width: "48px", height: "48px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
