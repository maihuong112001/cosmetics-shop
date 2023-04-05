import React from 'react'
import classNames from "classnames/bind";
import styles from "./PreviousArrowButton.module.scss";
import { LeftOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles);

function PreviousArrowButton(props) {
          const { onClick } = props;
          return (
            <div className={cx("wrapper")}>
              <LeftOutlined className={cx("button")}
                onClick={onClick}
              />
            </div>
          );
        }

export default PreviousArrowButton