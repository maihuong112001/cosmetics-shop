import classNames from "classnames/bind";
import styles from "./Compare.module.scss";
import { Modal } from "antd";
import { NumericFormat } from "react-number-format";
import { ReactComponent as InStock } from "@/assets/images/Products/in-stock.svg";
import { ReactComponent as OutOfStock } from "@/assets/images/Products/out-of-stock.svg";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Compare(props) {
    const { compares } = useSelector((compare) => compare.compare);
    return (
        <Modal
            centered
            footer={[null]}
            width="90%"
            open={props.isCompareOpen}
            onCancel={props.cancelCompare}
        >
            <div className={cx("compare")}>
                <div className={cx("table")}>
                    <ul className={cx("remove")}>
                        <li className={cx("label")}></li>
                        {compares.map((compare) => (
                            <li className={cx("remove")} key={compare.id}>
                                <button onClick={props.removeCompare}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <ul className={cx("name")}>
                        <li className={cx("label")}>Product</li>
                        {compares?.map((compare) => (
                            <li className={cx("name")} key={compare.id}>
                                <a href="/">{compare.name}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className={cx("image")}>
                        <li className={cx("label")}></li>
                        {compares?.map((compare) => (
                            <li key={compare.id}>
                                <img
                                    src={
                                        compare.images.find(
                                            (img) => img.id === 1
                                        ).image
                                    }
                                    alt=""
                                />
                            </li>
                        ))}
                    </ul>
                    <ul className={cx("variants")}>
                        <li className={cx("label")}>Variants</li>
                        {compares?.map((compare) => (
                            <li className={cx("variant")} key={compare.id}>
                                {compare.color.map((color) => (
                                    <div
                                        key={color.id}
                                        className={cx("color")}
                                        style={{ backgroundColor: color.color }}
                                    ></div>
                                ))}
                            </li>
                        ))}
                    </ul>
                    <ul className={cx("availability")}>
                        <li className={cx("label")}>Availability</li>
                        {compares?.map((compare) =>
                            compare.quantity > 0 ? (
                                <li
                                    className={cx("available")}
                                    key={compare.id}
                                >
                                    <div className={cx("icon")}>
                                        <InStock />
                                    </div>
                                    <p className="text-green-color">In Stock</p>
                                </li>
                            ) : (
                                <li
                                    className={cx("available")}
                                    key={compare.id}
                                >
                                    <div className={cx("icon")}>
                                        <OutOfStock />
                                    </div>
                                    <p className="text-red-color">
                                        Out Of Stock
                                    </p>
                                </li>
                            )
                        )}
                    </ul>
                    <ul className={cx("price")}>
                        <li className={cx("label")}>Price</li>
                        {compares?.map((compare) =>
                            compare.discount > 0 ? (
                                <li className={cx("price", "sale")}>
                                    <NumericFormat
                                        thousandSeparator=","
                                        value={compare.price}
                                        suffix="₫"
                                        displayType="text"
                                        customInput="span"
                                        renderText={(value, props) => (
                                            <span
                                                {...props}
                                                className={cx("price-on-sale")}
                                            >
                                                {value}
                                            </span>
                                        )}
                                    ></NumericFormat>
                                    <NumericFormat
                                        thousandSeparator=","
                                        value={compare.price - compare.price * (compare.discount / 100)}
                                        suffix="₫"
                                        displayType="text"
                                        customInput="span"
                                        renderText={(value, props) => (
                                            <span {...props}>{value}</span>
                                        )}
                                    ></NumericFormat>
                                </li>
                            ) : (
                                <NumericFormat
                                    thousandSeparator=","
                                    key={compare.id}
                                    value={compare.price}
                                    suffix="₫"
                                    displayType="text"
                                    customInput="span"
                                    renderText={(value, props) => (
                                        <li {...props} className={cx("price")}>
                                            {value}
                                        </li>
                                    )}
                                ></NumericFormat>
                            )
                        )}
                    </ul>
                    <ul className={cx("add-to-cart")}>
                        <li className={cx("label")}></li>
                        {compares?.map((compare) => (
                            <li key={compare.id}>
                                <button className={cx("cart-btn")}>
                                    <span>ADD TO CART</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Modal>
    );
}

export default Compare;
