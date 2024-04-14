import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="container">
        <div className="logo tracking-in-expand">
          <NavLink to="/" exact>
            Kaaf
          </NavLink>
          <div className="after-logo">
            <span>
              <br />
            </span>
            <span></span>
          </div>
        </div>
        <div className="navlist-bg tracking-in-expand">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/facts">Facts</NavLink>
            </li>

            <li>
              <NavLink to="/exp">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/port">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/AR">AR</NavLink>
            </li>
          </ul>
        </div >

        <div className="navlist-xs tracking-in-expand">
          <ul>
            <li>
              <NavLink to="/">
                <i className="fa fa-home"></i> <br /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <i className="fa fa-black-tie"></i> <br /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/facts">
                <i className="fa fa-coffee"></i> <br /> Facts
              </NavLink>
            </li>
            <li>
              <NavLink to="/exp">
                <i className="fa fa-briefcase "></i> <br /> Exp
              </NavLink>
            </li>
            <li>
              <NavLink to="/port">
                <i className="fa fa-address-card-o"></i> <br />  Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <i className="fa fa-send-o"></i> <br />  Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/ar">
                <i className="fa fa-language"></i> <br />  العربية
              </NavLink>
            </li>
          </ul>
        </div>
      </div >
    </div >
  );
};
export default SideNav;
