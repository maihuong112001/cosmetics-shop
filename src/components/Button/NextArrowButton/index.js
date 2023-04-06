import React from 'react'
import classNames from "classnames/bind";
import styles from "./NextArrowButton.module.scss";
import { RightOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles);

function NextArrowButton(props) {
          const { onClick } = props;
          return (
            <div className={cx("wrapper")}>
              <RightOutlined className={cx("button")}
                onClick={onClick}
              />
            </div>
          );
        }

export default NextArrowButton