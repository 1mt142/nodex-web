/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 11:59:06
 * @modify date 2021-06-15 15:50:09
 * @desc [description]
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./assets/icons/fontawsome";
import routes from "./routes";
import RouteRenderer from "./helpers/RouteRenderer";
import "./assets/scss/App.scss";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              component={() => RouteRenderer(route)}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}
