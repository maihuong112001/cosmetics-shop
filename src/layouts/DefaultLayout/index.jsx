import classNames from "classnames/bind";
import Header from "@/components/Header";
import styles from "./DefaultLayout.module.scss";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}><Outlet /></div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
