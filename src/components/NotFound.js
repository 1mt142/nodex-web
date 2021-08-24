/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-05-03 16:11:22
 * @modify date 2021-05-03 16:11:24
 * @desc [description]
 */
import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { isUserAuthenticated } from "../helpers/authUtils";

const Page404 = () => {
  const location = useLocation();
  if (location.pathname === "/" && isUserAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }
  if (location.pathname === "/" && !isUserAuthenticated()) {
    return <Redirect to="/login" />;
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh", background: "rgb(255, 214, 0)" }}
    >
      <div
        style={{
          background: "#ffd600",
          boxShadow: "1px 1px 3px 0px #0000006b",
          padding: "15px",
        }}
      >
        <h1 style={{ color: "#0054a5" }}>Page not found</h1>
        <p style={{ color: "black", fontSize: "30px" }}>
          Sorry, your requested url &quot;{location.pathname}&quot; was not
          found
        </p>
      </div>
    </div>
  );
};

export default Page404;
