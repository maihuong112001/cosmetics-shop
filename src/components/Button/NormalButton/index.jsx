import React from "react";
import classNames from "classnames/bind";
import styles from "./NormalButton.module.scss";

const cx = classNames.bind(styles);

function NormalButton({ children, onClick, showButton }) {
  const Component = "button";
  const props = {
    onClick,
    showButton
  };
  const classes = cx("wrapper", {});
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default NormalButton;
