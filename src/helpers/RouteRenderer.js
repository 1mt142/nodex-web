/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-05-03 16:11:47
 * @modify date 2021-05-03 16:11:48
 * @desc [description]
 */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import React from "react";

const RouteRenderer = ({ component, layout, ...rest }) => {
  const PageComponent = component;
  if (layout) {
    const Layout = layout;
    return (
      <Layout {...rest}>
        <PageComponent />
      </Layout>
    );
  }
  return <PageComponent />;
};

RouteRenderer.propTypes = {
  component: PropTypes.any,
  layout: PropTypes.any,
};

export default RouteRenderer;
