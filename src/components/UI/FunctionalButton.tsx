"use client";
import React, { Fragment } from "react";
import css from "./FunctionalButton.module.css";

const FunctionalButton: React.FC<{ name: string; onClick?: () => void }> = ({
  name,
  onClick,
}) => {
  return (
    <Fragment>
      <button className={css.button} onClick={onClick}>
        {name}
      </button>
    </Fragment>
  );
};

export default FunctionalButton;
