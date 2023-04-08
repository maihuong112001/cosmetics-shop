
import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import FeedbackItem from "./FeedbackItem";
import { feedback } from "@/data/feedback.mock";
import Slider from "react-slick";
import { feedbackSettings } from "@/services/settings.services";

const cx = classNames.bind(styles);

function Feedback() {
  return (
    <div className={cx("wrapper")}>

			<Slider {...feedbackSettings} className="">
        {
          feedback.map((feedback) => (
            <FeedbackItem name={feedback.name} avt={feedback.image} title={feedback.title} description={feedback.description} key={feedback.id} />
          ))
        }
				
			</Slider>
      
    </div>
  );
}

export default Feedback;
