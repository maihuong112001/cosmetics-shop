import { useRef, useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "../ProductCard.module.scss";
import { ReactComponent as HourGlass } from "@/assets/images/Products/hourglass.svg";
const cx = classNames.bind(styles);


function CountdownTimer(props) {

          const [timerDays, setTimerDays] = useState('00');
          const [timerMinutes, setTimerMinutes] = useState('00');
          const [timerHours, setTimerHours] = useState('00');
          const [timerSeconds, setTimerSeconds] = useState('00');

          let interval = useRef();
          const startTimer = () => {
                    const countdownDate = new Date('Jan 1, 2024 00:00:00').getTime();
                    interval = setInterval(() => {
                              const now = new Date().getTime();
                              const distance = countdownDate - now;
                              const days = Math.floor(distance / (1000 * 60 * 60* 24));
                              const hours = Math.floor((distance % (1000 * 60 * 60* 24) / (1000 * 60 * 60)));
                              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                              const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                              if(distance < 0) {
                                        clearInterval(interval.current)
                              } else {
                                        setTimerDays(days);
                                        setTimerHours(hours);
                                        setTimerMinutes(minutes);
                                        setTimerSeconds(seconds);
                              }
                    }, 1000)
          }
          useEffect(() => {
              startTimer  ();
              return () => {
                    clearInterval(interval.current)
              }    
          })

		  const isInCart = props.inCard ? cx("countdown-card") : cx("countdown-more")
          return (
                    <div className={isInCart}>
						{props.inCard ? '':
							<div className={cx("icon")}>
								<HourGlass style={{fill : '#fff'}}/>
							</div>
						}
						
                              <div className={cx("countdown")}>
                                        <div className={cx("item")}>
                                                  <span>{timerDays}</span>
                                                  <span>D</span>
                                        </div>
                                        <div className={cx("item")}>
                                                  <span>{timerHours}</span>
                                                  <span> :</span>
                                        </div>
                                        <div className={cx("item")}>
                                                  <span>{timerMinutes}</span>
                                                  <span> :</span>
                                        </div>
                                        <div className={cx("item")}>
                                                  <span>{timerSeconds}</span>
                                        </div>
                              </div>
                    </div>
          )
}

export default CountdownTimer;