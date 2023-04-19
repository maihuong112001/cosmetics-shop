import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import CategoriesSlider from "@/components/CategoriesSlider";
import {Row, Col, Select, Breadcrumb, Drawer} from "antd";
import ProductCard from "@/components/ProductCard";
import { productList, colorList } from "@/services/product.service";
import Sidebar from "./SideBar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Collection() {
    const { wishlists } = useSelector((wishlist) => wishlist.wishlist);
    const { compares } = useSelector((compare) => compare.compare);
    const products = productList.getAllProduct();

    const [display, setDisplay] = useState(2);

    const setView = (display) => {
        setDisplay(display);
    };

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <div className={cx("content")}>
                    <div className={cx("heading")}>
                        <h2>Products</h2>
                    </div>
                    <Breadcrumb
                        className="text-center w-fit mx-auto my-0"
                        items={[
                            {
                                title: (
                                    <p className="cursor-pointer hover:text-text-hover-color">
                                        Home
                                    </p>
                                ),
                            },
                            { title: "Products" },
                        ]}
                    ></Breadcrumb>
                    <div className="max-w-[1440px]">
                        <CategoriesSlider medium={false} />
                    </div>
                </div>
            </div>
            <div className="px-[15px] flex justify-center mt-[50px]">
                <Row className="max-w-[1440px] w-full">
                    <Col className={cx("sidebar-contain")}>
                        <Drawer
                            placement="left"
                            onClose={onClose}
                            open={open}
                            className={cx("drawer")}
                        >
                            <Sidebar />
                        </Drawer>
                        <Sidebar />
                    </Col>
                    <Col className={cx("collection-content")}>
                        <div className="flex justify-between mb-[25px] mx-[24.5px]">
                            <div className={cx("filter-collection")}>
                                <button onClick={showDrawer}>filter</button>
                            </div>
                            <Select
                                defaultValue="featured"
                                style={{ width: "178px" }}
                                options={[
                                    { value: "featured", label: "Featured" },
                                    {
                                        value: "bestselling",
                                        label: "Best Selling",
                                    },
                                    {
                                        value: "a-z",
                                        label: "Alphabetically, A-Z",
                                    },
                                    {
                                        value: "z-a",
                                        label: "Alphabetically, Z-A",
                                    },
                                    {
                                        value: "low-high",
                                        label: "Price, low to high",
                                    },
                                    {
                                        value: "high-low",
                                        label: "Price, high to low",
                                    },
                                    {
                                        value: "old-new",
                                        label: "Date, old to new",
                                    },
                                    {
                                        value: "new-old",
                                        label: "Date, new to old",
                                    },
                                ]}
                            />

                            <div className={cx("collection-view")}>
                                <div
                                    className={cx("item")}
                                    onClick={() => setView(2)}
                                >
                                    {display === 2 ? (
                                        <p className={cx("two", "btn", "col")}>
                                            <span />
                                            <span />
                                        </p>
                                    ) : (
                                        <p className={cx("btn", "col")}>
                                            <span />
                                            <span />
                                        </p>
                                    )}
                                </div>
                                <div
                                    className={cx("item")}
                                    onClick={() => setView(3)}
                                >
                                    {display === 3 ? (
                                        <p
                                            className={cx(
                                                "three",
                                                "btn",
                                                "col"
                                            )}
                                        >
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    ) : (
                                        <p className={cx("btn", "col")}>
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    )}
                                </div>
                                <div
                                    className={cx("item")}
                                    onClick={() => setView(4)}
                                >
                                    {display === 4 ? (
                                        <p className={cx("four", "btn", "col")}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    ) : (
                                        <p className={cx("btn", "col")}>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    )}
                                </div>
                                <div
                                    className={cx("item")}
                                    onClick={() => setView(1)}
                                >
                                    {display === 1 ? (
                                        <p className={cx("list", "btn", "row")}>
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    ) : (
                                        <p className={cx("btn", "row")}>
                                            <span />
                                            <span />
                                            <span />
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {display === 2 ? (
                            <div className={cx("product", "grid-2")}>
                                {products.map((item) => (
                                    <div className={cx("product-col")} key={item.id}>
                                        <ProductCard
                                            row
                                            images={item.images}
                                            name={item.name}
                                            id={item.id}
                                            price={item.price}
                                            preOrder={item.preOrder}
                                            brand={item.brand}
                                            quantity={item.quantity}
                                            description={item.description}
                                            color={item.color}
                                            discount={item.discount}
                                            key={item.id}
                                            button={true}
                                            qtyCart={true}
                                            isWishlist={wishlists.some(
                                                (wishlist) =>
                                                    wishlist.id === item.id
                                            )}
                                            isCompare={compares.some(
                                                (compare) =>
                                                    compare.id === item.id
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : display === 3 ? (
                            <div className={cx("product", "grid-3")} >
                                {products.map((item) => (
                                    <div className={cx("product-col")} key={item.id}>
                                        <ProductCard
                                            row
                                            images={item.images}
                                            name={item.name}
                                            id={item.id}
                                            price={item.price}
                                            preOrder={item.preOrder}
                                            description={item.description}
                                            quantity={item.quantity}
                                            color={item.color}
                                            discount={item.discount}
                                            key={item.id}
                                            button={true}
                                            qtyCart={true}
                                            brand={item.brand}
                                            isWishlist={wishlists.some(
                                                (wishlist) =>
                                                    wishlist.id === item.id
                                            )}
                                            isCompare={compares.some(
                                                (compare) =>
                                                    compare.id === item.id
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : display === 4 ? (
                            <div className={cx("product", "grid-4")}>
                                {products.map((item) => (
                                    <div className={cx("product-col")} key={item.id}>
                                        <ProductCard
                                            row
                                            images={item.images}
                                            name={item.name}
                                            id={item.id}
                                            price={item.price}
                                            preOrder={item.preOrder}
                                            description={item.description}
                                            quantity={item.quantity}
                                            brand={item.brand}
                                            color={item.color}
                                            discount={item.discount}
                                            key={item.id}
                                            button={true}
                                            qtyCart={true}
                                            isWishlist={wishlists.some(
                                                (wishlist) =>
                                                    wishlist.id === item.id
                                            )}
                                            isCompare={compares.some(
                                                (compare) =>
                                                    compare.id === item.id
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : display === 1 ? (
                            <div className={cx("product", "list")}>
                                {products.map((item) => (
                                    <div className={cx("product-col")} key={item.id}>
                                        <ProductCard
                                            row={false}
                                            images={item.images}
                                            name={item.name}
                                            id={item.id}
                                            price={item.price}
                                            preOrder={item.preOrder}
                                            description={item.description}
                                            quantity={item.quantity}
                                            brand={item.brand}
                                            color={item.color}
                                            discount={item.discount}
                                            key={item.id}
                                            button={true}
                                            qtyCart={true}
                                            isWishlist={wishlists.some(
                                                (wishlist) =>
                                                    wishlist.id === item.id
                                            )}
                                            isCompare={compares.some(
                                                (compare) =>
                                                    compare.id === item.id
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Collection;
