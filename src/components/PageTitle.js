import PropTypes from "prop-types";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div style={{ padding: "15px" }}>
      <h1 style={{ fontSize: "30px" }}>{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
