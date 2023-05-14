import React from "react";
import PropTypes from "prop-types";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};
