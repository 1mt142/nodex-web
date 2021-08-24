/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 13:49:48
 * @modify date 2021-06-15 15:59:37
 * @desc TopBar for PrivateLayout
 */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileMenu from "./Menus/profileMenu";

import logoSmall from "../../../assets/images/upay_logo.png";

const TopBar = (props) => {
  const sidebarToggle = () => {
    document.body.classList.toggle("enlarged");
    props.setIsLarge(!props.isLarge);
  };
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <Link to="/dashboard" className="logo">
            <span className="text-white">Test-Web</span>
            <i>
              <img src={logoSmall} alt="" height="22" />
            </i>
          </Link>
        </div>

        <nav className="navbar-custom">
          <ul className="navbar-right list-inline float-end mb-0">
            <ProfileMenu />
          </ul>
          <ul className="list-inline menu-left mb-0">
            <li className="float-left">
              <button
                onClick={sidebarToggle}
                className="button-menu-mobile open-left waves-effect"
                type="button"
              >
                <FontAwesomeIcon icon="bars" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

TopBar.propTypes = {
  isLarge: PropTypes.bool,
  setIsLarge: PropTypes.func,
};

export default TopBar;
