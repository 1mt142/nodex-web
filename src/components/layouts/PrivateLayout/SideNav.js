/**
 * @author Hasinoor Rahman
 * @email hasinoori@gmail.com
 * @create date 2021-04-16 12:11:08
 * @modify date 2021-06-15 15:59:03
 * @desc Sidenav contains NavLinks for SideBar of PrivateLayout
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { hasPermission } from "../../../helpers/authUtils";

const SideNav = () => {
  return (
    <>
      <div id="sidebar-menu">
        <ul className="metismenu" id="menu">
          <li>
            <NavLink
              activeClassName="mm-active"
              to="/"
              className="waves-effect"
            >
              <FontAwesomeIcon icon="home" />
              <span> Dashboard </span>
            </NavLink>
          </li>
          {/* {hasPermission("can_view_lanka_bangla_report") && (
            <li>
              <NavLink
                activeClassName="mm-active"
                to="/reconciliation-report"
                className="waves-effect"
              >
                <i className="ti-home" />
                <span> Reconciliation Report </span>
              </NavLink>
            </li>
          )}
          {hasPermission("can_view_dpdc_report") && (
            <li>
              <NavLink
                activeClassName="mm-active"
                to="/dpdcreport"
                className="waves-effect"
              >
                <i className="ti-home" />
                <span> DPDC Report </span>
              </NavLink>
            </li>
          )}
          {hasPermission("can_view_titas_report") && (
            <li>
              <NavLink
                activeClassName="mm-active"
                to="/titasreport"
                className="waves-effect"
              >
                <i className="ti-home" />
                <span> Titas Report </span>
              </NavLink>
            </li>
          )}

          {hasPermission("can_view_wasa_report") && (
            <li>
              <NavLink
                activeClassName="mm-active"
                to="/wasa-report"
                className="waves-effect"
              >
                <i className="ti-home" />
                <span> KWASA Report </span>
              </NavLink>
            </li>
          )}

          {hasPermission("can_view_daily_wasa_report") && (
            <li>
              <NavLink
                activeClassName="mm-active"
                to="/daily-wasa-report"
                className="waves-effect"
              >
                <i className="ti-home" />
                <span>Daily WASA Report </span>
              </NavLink>
            </li>
          )} */}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
