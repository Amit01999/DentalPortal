import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/icons/logo1.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(err => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <NavLink
          to="/"
          className={navClass =>
            navClass.isActive
              ? 'text-primary text-[16px] leading-7 font-[600]'
              : 'text-accent'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navClass =>
            navClass.isActive
              ? 'text-primary text-[16px] leading-7 font-[600]'
              : 'text-accent'
          }
          to="/appointment"
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navClass =>
            navClass.isActive
              ? 'text-primary text-[16px] leading-7 font-[600]'
              : 'text-accent'
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      {user?.uid ? (
        <>
          <li>
            <NavLink
              className={navClass =>
                navClass.isActive
                  ? 'text-primary text-[16px] leading-7 font-[600]'
                  : 'text-accent'
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className={navClass =>
              navClass.isActive
                ? 'text-primary text-[16px] leading-7 font-[600]'
                : 'text-accent'
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          className={navClass =>
            navClass.isActive
              ? 'text-primary text-[16px] leading-7 font-[600]'
              : 'text-accent'
          }
          to="/contactus"
        >
          Contact Us
        </NavLink>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-auto h-[8.8vh]" src={logo}></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
