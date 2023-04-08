
import classNames from "classnames/bind";
import styles from "./FeedbackItem.module.scss";
import { ReactComponent as StarIcon } from "@/assets/images/star.svg";

const cx = classNames.bind(styles);

function FeedbackItem(props) {
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
				<h5>{props.title}</h5>    	
				{props.description}
      </div>
			<div className={cx("avatar")}>     
				<img src={props.avt} alt=""/>
      </div>
			<div className={cx("name")}>  
				<p>{props.name}</p>    	
      </div>
    </div>
  );
}

export default FeedbackItem;
