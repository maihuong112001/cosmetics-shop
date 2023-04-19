import classNames from "classnames/bind";
import styles from "./RangSlider.module.scss";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function RangeSlider({ min, max, value, step, onChange })  {
	const [minValue, setMinValue] = useState(value ? value.min : min);
	const [maxValue, setMaxValue] = useState(value ? value.max : max);
        
	useEffect(() => {
	  if (value) {
	    setMinValue(value.min);
	    setMaxValue(value.max);
	  }
	}, [value]);
        
	const handleMinChange = e => {
	  e.preventDefault();
	  const newMinVal = Math.min(+e.target.value, maxValue - step);
	  if (!value) setMinValue(newMinVal);
	  onChange({ min: newMinVal, max: maxValue });
	};
        
	const handleMaxChange = e => {
	  e.preventDefault();
	  const newMaxVal = Math.max(+e.target.value, minValue + step);
	  if (!value) setMaxValue(newMaxVal);
	  onChange({ min: minValue, max: newMaxVal });
	};
        
	const minPos = ((minValue - min) / (max - min)) * 100;
	const maxPos = ((maxValue - min) / (max - min)) * 100;
        
	return (
	  <div className={cx("range-wrapper")}>
	    <div className={cx("input-container")}>
	      <input
	        className={cx("input")}
	        type="range"
	        value={minValue}
	        min={min}
	        max={max}
	        step={step}
	        onChange={handleMinChange}
	      />
	      <input
	        className={cx("input")}
	        type="range"
	        value={maxValue}
	        min={min}
	        max={max}
	        step={step}
	        onChange={handleMaxChange}
	      />
	    </div>
        
	    <div className={cx("control-wrapper")}>
	      <div className={cx("control")} style={{ left: `${minPos}%` }} />
	      <div className={cx("rail")}>
	        <div
		className={cx("inner-rail")} 
		style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
	        />
	      </div>
	      <div className={cx("control")} style={{ left: `${maxPos}%` }} />
	    </div>
	  </div>
	);
        };

export default RangeSlider;