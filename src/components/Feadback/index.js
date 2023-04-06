
import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import FeedbackItem from "./FeedbackItem";
import Slider from "react-slick";
import {NextArrowButton, PreviousArrowButton} from '../Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles);

const settings = {
  dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrowButton />,
      prevArrow: <PreviousArrowButton />,
      responsive: [
        {

          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
	}
function Feedback() {
  return (
    <div className={cx("wrapper")}>

			<Slider {...settings} className="">
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
				<FeedbackItem/>
			</Slider>
      
    </div>
  );
}

export default Feedback;
