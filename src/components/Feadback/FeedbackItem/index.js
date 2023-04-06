
import classNames from "classnames/bind";
import styles from "./FeedbackItem.module.scss";
import imagesAboutUs from "@/assets/images/AboutUs";
import { ReactComponent as StarIcon } from "../../../../../assets/images/star.svg";

const cx = classNames.bind(styles);

function FeedbackItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("ratting")}>   
				<StarIcon/>
				<StarIcon/>
				<StarIcon/>
				<StarIcon/>
				<StarIcon/>
      </div>
			<div className={cx("content")}>  
				<h5>“Amazing piece of history”</h5>    	
				Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
      </div>
			<div className={cx("avatar")}>     
				<img src={imagesAboutUs.fed_avt_1} alt=""/>
      </div>
			<div className={cx("name")}>  
				<p>ANN SMITH</p>    	
      </div>
    </div>
  );
}

export default FeedbackItem;
