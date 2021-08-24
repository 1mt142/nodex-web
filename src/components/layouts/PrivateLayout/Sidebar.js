/* eslint-disable no-new */
/**
 * @author Hasinoor Rahman
 * @email hasinoori@gmail.com
 * @create date 2021-04-16 12:10:39
 * @modify date 2021-05-03 12:22:34
 * @desc SideBar for PrivateLayout
 */
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import MetisMenu from "metismenujs";

import PerfectScrollbar from "react-perfect-scrollbar";
import Sidenav from "./SideNav";

import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ isLarge }) => {
  useEffect(() => {
    new MetisMenu("#menu", {});
  }, []);

  useEffect(() => {
    if (isLarge === true) {
      new MetisMenu("#menu", {});
    }
  }, [isLarge]);

  return (
    <>
      <div className="left side-menu">
        {isLarge ? (
          <PerfectScrollbar>
            <Sidenav />
          </PerfectScrollbar>
        ) : (
          <Sidenav />
        )}

        <div className="clearfix" />
      </div>
    </>
  );
};

Sidebar.propTypes = {
  isLarge: PropTypes.bool,
};

export default Sidebar;
