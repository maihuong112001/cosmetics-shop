import { Carousel } from "antd";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import images from "@/assets/images";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Carousel effect="fade">
        <div>
          <img src={images.slider_1} alt="slider-2" className="w-100"></img>
        </div>
        <div>
          <img src={images.slider_2} alt="slider-2" className="w-100"></img>
        </div>
        <div>
          <img src={images.slider_3} alt="slider-2" className="w-100"></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
