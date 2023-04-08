
import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import FeedbackItem from "./FeedbackItem";
import Slider from "react-slick";
import {ArrowButton} from '../Button'
import { RightOutlined, LeftOutlined } from '@ant-design/icons';


const cx = classNames.bind(styles);

const settings = {
  dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ArrowButton small left><LeftOutlined/></ArrowButton>,
      prevArrow: <ArrowButton small right><RightOutlined/></ArrowButton>,
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
