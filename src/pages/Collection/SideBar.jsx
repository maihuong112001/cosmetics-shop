import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import { Menu, Badge, Rate } from "antd";
import { categoriesService } from "@/services/categories.service";
import { NumericFormat } from "react-number-format";
import { productList, colorList } from "@/services/product.service";
import RangeSlider from "@/components/RangeSlider";
import { useState } from "react";
import { brandsService } from "@/services/brands.service";

const cx = classNames.bind(styles);

function FeaturedProduct(props) {
    const image = props.images.find((img) => img.id === 1);
    return (
        <div className={cx("featured-product")}>
            <div className={cx("image")}>
                <a href="/">
                    <img
                        src={image.image}
                        alt=""
                        className={cx("fade-in")}
                    ></img>
                </a>
            </div>
            <div className={cx("content")}>
                <div className={cx("ratting")}>
                    <Rate
                        disabled
                        defaultValue={5}
                        style={{ fontSize: "12px" }}
                    />
                </div>
                <h3 className={cx("name")}>
                    <a href="/">{props.name}</a>
                </h3>

                <div className={cx("price")}>
                    
                    <NumericFormat
                        thousandSeparator=","
                        value={props.price}
                        suffix="₫"
                        displayType="text"
                        customInput="span"
                        renderText={(value, props) => (
                            <span {...props}>{value}</span>
                        )}
                    ></NumericFormat>
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    const featuredProduct = productList.getFeaturedProduct();
    const categories = categoriesService.getAllCategory();
    const brands = brandsService.getAllBrand();
    const colors = colorList.getAllColor();
    const [price, setPrice] = useState({ min: 0, max: 5031210 });

    function getItem(label, key, children, type) {
        return {
            key,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem(
            "Collections",
            "collections",
            categories.map((item) =>
                getItem(
                    <div className={cx("subtitle")}>
                        <p>{item.name}</p>
                        <span>11</span>
                    </div>,
                    item.id
                )
            )
        ),
        getItem("Availability", "availability", [
            getItem(
                <div className={cx("subtitle")}>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <p>in stock</p>
                    </div>
                    <span>11</span>
                </div>,
                "in-stock"
            ),
            getItem(
                <div className={cx("subtitle")}>
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <p>out of stock</p>
                    </div>
                    <span>11</span>
                </div>,
                "out-stock"
            ),
        ]),
        {
            type: "divider",
        },
        getItem("Price", "price", [
            getItem(
                <div className="flex flex-col ">
                    <RangeSlider
                        min={0}
                        max={5031210}
                        step={5}
                        value={price}
                        onChange={setPrice}
                    />
                    <div className="flex gap-3 text-[1.5rem] mb-5 text-black">
                        Price:
                        <NumericFormat
                            thousandSeparator=","
                            value={price.min}
                            suffix="₫"
                            displayType="text"
                            customInput="span"
                            renderText={(value, props) => (
                                <p {...props}>{value}</p>
                            )}
                        ></NumericFormat>
                        -
                        <NumericFormat
                            thousandSeparator=","
                            value={price.max}
                            suffix="₫"
                            displayType="text"
                            customInput="span"
                            renderText={(value, props) => (
                                <p {...props}>{value}</p>
                            )}
                        ></NumericFormat>
                    </div>
                </div>,
                "slider"
            ),
        ]),
        getItem(
            "Brand",
            "brand",
            brands.map((brand) =>
                getItem(
                    <div className={cx("subtitle")}>
                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <p>{brand.name}</p>
                        </div>
                        <span>11</span>
                    </div>,
                    brand.name
                )
            )
        ),
        getItem(
            "Color",
            "color",
            colors.map((color) =>
                getItem(
                    <div className={cx("subtitle")}>
                        <div className="flex ">
                            <div
                                className={cx("color")}
                                style={{ backgroundColor: color.color }}
                            ></div>
                            <p>{color.name}</p>
                        </div>
                        <span>11</span>
                    </div>,
                    color.name
                )
            )
        ),
        getItem("Size", "size", [
            getItem(
                <div className="flex gap-5 my-5 z-100">
                    <Badge count={1} color="#868686">
                        <div className={cx("size")}>S</div>
                    </Badge>
                    <Badge count={1} color="#868686">
                        <div className={cx("size")}>L</div>
                    </Badge>
                    <Badge count={1} color="#868686">
                        <div className={cx("size")}>XL</div>
                    </Badge>
                </div>,
                "size-item"
            ),
        ]),
        getItem(
            "Product Featured",
            "product",
            featuredProduct.map((item, index) =>
                getItem(
                    <FeaturedProduct
                        images={item.images}
                        name={item.name}
                        price={item.price}
                    />,
                    item.name + index
                )
            )
        ),
    ];

    return (
        <aside className={cx("sidebar")}>
            <div className={cx("collections")}>
                <Menu
                    defaultOpenKeys={[
                        "collections",
                        "availability",
                        "price",
                        "brand",
                        "color",
                        "size",
                        "product",
                    ]}
                    mode="inline"
                    items={items}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
