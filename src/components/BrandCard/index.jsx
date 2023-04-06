
import classNames from "classnames/bind";
import Slider from "react-slick";
import styles from "./BrandCard.module.scss";
import imagesAboutUs from "@/assets/images/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);

const settings = {
  dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}

function BrandCard() {
  return (
    <div className={cx("wrapper")}>
            <Slider {...settings}>
                    <div className={cx("item")}>
                              <img src={imagesAboutUs.brand_1} alt="brand 1"></img>
                    </div>
                    <div className={cx("item")}>
                              <img src={imagesAboutUs.brand_2} alt="brand 2"></img>
                    </div>
                    <div className={cx("item")}>
                              <img src={imagesAboutUs.brand_3} alt="brand 3"></img>
                    </div>
                    <div className={cx("item")}>
                              <img src={imagesAboutUs.brand_4} alt="brand 4"></img>
                    </div>
                    <div className={cx("item")}>
                              <img src={imagesAboutUs.brand_5} alt="brand 5"></img>
                    </div>
            </Slider>
    </div>
  );
}

export default BrandCard;
