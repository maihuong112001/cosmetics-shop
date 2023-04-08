import React from 'react'
import classNames from "classnames/bind";
import styles from "./TransferButton.module.scss";

const cx = classNames.bind(styles);

function TransferButton({children, onClick, outline, normal, medium, small, ...passProps}) {
          const Component = 'button';
          const props = {
            onClick,
          };
          const classes = cx('wrapper', {
                    outline, 
                    normal,
                    medium,
                    small,
          });
          return (
            <Component className={classes} {...props}>
              {children}
            </Component>
          );
        }

export default TransferButton;