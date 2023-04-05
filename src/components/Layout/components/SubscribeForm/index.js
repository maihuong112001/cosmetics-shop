
import classNames from "classnames/bind";
import styles from "./SubscribeForm.module.scss";

const cx = classNames.bind(styles);

function SubscribeForm() {
  return (
          <div className={cx("wrapper")}>
            <div className={cx("inner-about")}>
                    <h2 className={cx("heading")}>LATEST FROM MOJURI!</h2>
                    <p>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>
                    <form className="flex gap-3 w-full mt-7">
                              <input placeholder="Your email" className={cx("input")}></input>
                              <button className="w-min">SUBSCRIBE</button>
                    </form>
            </div>
          </div>
  );
}

export default SubscribeForm;
