
import classNames from "classnames/bind";
import styles from "./Feedback.module.scss";
import FeedbackItem from "./FeedbackItem";
import { feedbackService } from "@/services/feedback.service";
import Slider from "react-slick";
import { feedbackSettings } from "@/services/settings.service";

const cx = classNames.bind(styles);

function Feedback() {
  const feedbackList = feedbackService.getAllFeedback();
  return (
    <div className={cx("wrapper")}>

			<Slider {...feedbackSettings} className="">
        {
          feedbackList.map((feedback) => (
            <FeedbackItem name={feedback.name} avt={feedback.image} title={feedback.title} description={feedback.description} key={feedback.id} />
          ))
        }
				
			</Slider>
      
    </div>
  );
}

export default Feedback;
