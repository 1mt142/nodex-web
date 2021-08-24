/**
 * @author Hasinoor Rahman
 * @email hasinoori@gmail.com
 * @create date 2021-04-16 12:09:19
 * @modify date 2021-05-03 15:37:46
 * @desc Private layout container component
 */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Redirect } from "react-router";
import Forbidden from "../../Forbidden";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { hasPermission, isUserAuthenticated } from "../../../helpers/authUtils";

const PrivateLayout = ({ children, permission }) => {
  const [isLarge, setIsLarge] = useState(true);
  if (!isUserAuthenticated()) {
    return <Redirect to="/" />;
  }
  return (
    <div id="wrapper">
      <TopBar isLarge={isLarge} setIsLarge={setIsLarge} />
      <Sidebar isLarge={isLarge} />
      <div className="content-page">
        <div className="content">
          {permission && !hasPermission(permission) ? <Forbidden /> : children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.any,
  permission: PropTypes.string,
};

export default PrivateLayout;
