import React from 'react'
import classNames from "classnames/bind";
import styles from "./ArrowButton.module.scss";

const cx = classNames.bind(styles);

function ArrowButton({children, onClick, small, right, left, medium  , circle, ...passProps}) {
          const Component = 'button';
          const props = {
            onClick,
          };
          const classes = cx('wrapper', {
            small,
            right,
            left,
            circle,
          });
          return (
            <Component className={classes} {...props}>
              {children}
            </Component>
          );
        }

export default ArrowButton