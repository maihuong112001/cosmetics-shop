import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { Row, Col, Tabs, Rate, Breadcrumb, Radio, Modal, Input } from "antd";
import {
    CarOutlined,
    HeartOutlined,
    MinusOutlined,
    PlusOutlined,
    CheckOutlined,
    QuestionCircleOutlined,
    InboxOutlined,
    RightOutlined,
    LeftOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import { NumericFormat } from "react-number-format";
import { useState } from "react";
import { productList } from "@/services/product.service";
import CountdownTimer from "@/components/ProductCard/CountdownTimer";
import { ArrowButton } from "@/components/Button";

const cx = classNames.bind(styles);

function ProductDetail() {
    const product = productList.getAllProduct().find((item) => item.id === 1);
    const newPrice = product.price - product.price * (product.discount / 100);

    const [quantityCart, setQuantityCart] = useState(1);
    const increaseQuantityCart = () => {
        setQuantityCart(quantityCart + 1);
    };
    const decreaseQuantityCart = () => {
        if (quantityCart > 1) {
            setQuantityCart(quantityCart - 1);
        }
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <ArrowButton small rightIn square>
                <RightOutlined />
            </ArrowButton>
        ),
        prevArrow: (
            <ArrowButton small leftIn square>
                <LeftOutlined />
            </ArrowButton>
        ),
        beforeChange: (current, next) => setImage({ image: next }),
    };

    const imageSliderVertical = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
    };

    const [image, setImage] = useState(0);

    const [isQuestionOpen, setIsQuestionOpen] = useState(false);

    const showQuestion = () => {
        setIsQuestionOpen(true);
    };
    const handleCancelQuestion = () => {
        setIsQuestionOpen(false);
    };

    const [isReturnOpen, setIsReturnOpen] = useState(false);

    const showReturn = () => {
        setIsReturnOpen(true);
    };
    const handleCancelReturn = () => {
        setIsReturnOpen(false);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Breadcrumb
                    className="text-center w-fit my-7"
                    items={[
                        {
                            title: (
                                <p className="cursor-pointer hover:text-text-hover-color">
                                    Home
                                </p>
                            ),
                        },
                        {
                            title: (
                                <p className="cursor-pointer hover:text-text-hover-color">
                                    Bracelects
                                </p>
                            ),
                        },
                        { title: "A Diamond (Upsell)" },
                    ]}
                ></Breadcrumb>
                <Row>
                    <Col lg={14} md={24} span={14}>
                        <Row>
                            <Col md={4} className="px-[7.5px]">
                                <Slider {...imageSliderVertical}>
                                    {product.images.map((item) => (
                                        <div className="w-[109px] pb-[15px] relative">
                                            <img
                                                src={item.image}
                                                key={item.id}
                                                alt=""
                                                className={
                                                    cx("fade-in") +
                                                    "max-w-full h-auto w-full"
                                                }
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </Col>
                            <Col md={20} className="px-[7.5px]">
                                <Slider
                                    {...settings}
                                >
                                    {product.images.map((item) => (
                                        <img
                                            src={item.image}
                                            key={item.id}
                                            alt=""
                                            className={
                                                cx("fade-in") +
                                                "max-w-full h-auto w-full"
                                            }
                                        />
                                    ))}
                                </Slider>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        lg={10}
                        md={24}
                        span={10}
                        className="flex flex-col pl-[30px] pr-[15px]"
                    >
                        <div className={cx("ratting")}>
                            <Rate
                                value={3}
                                disabled
                                style={{ fontSize: "12px" }}
                            />
                        </div>
                        <div className={cx("name")}>
                            <h1>{product.name}</h1>
                        </div>
                        {product.discount > 0 ? (
                            <div className={cx("price")}>
                                <NumericFormat
                                    thousandSeparator=","
                                    value={product.price}
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
                                    value={newPrice}
                                    suffix="₫"
                                    displayType="text"
                                    customInput="span"
                                    renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                    )}
                                ></NumericFormat>
                            </div>
                        ) : (
                            <div className={cx("price")}>
                                <NumericFormat
                                    thousandSeparator=","
                                    value={product.price}
                                    suffix="₫"
                                    displayType="text"
                                    customInput="span"
                                    renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                    )}
                                ></NumericFormat>
                            </div>
                        )}
                        <div className={cx("brand")}>
                            <span>By</span>
                            <a href="/">{product.brand}</a>
                        </div>
                        <div className={cx("border")}></div>
                        <CountdownTimer inDetail />
                        <div className={cx("action")}>
                            <div className="flex">
                                <div className={cx("quantity")}>
                                    <div className={cx("qty-btn")}>
                                        <MinusOutlined
                                            style={{
                                                fontSize: "18px",
                                                color: "#fff",
                                            }}
                                            className={cx("gsx")}
                                            onClick={decreaseQuantityCart}
                                        />
                                    </div>
                                    <input
                                        className="bg-transparent  leading-[40px] text-center w-[56px] text-[1.8rem] text-black"
                                        readOnly
                                        value={quantityCart}
                                        pattern="[0-9]"
                                    ></input>
                                    <div className={cx("qty-btn")}>
                                        <PlusOutlined
                                            style={{
                                                fontSize: "18px",
                                                color: "#fff",
                                            }}
                                            onClick={increaseQuantityCart}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-wrap">
                                    <button className={cx("add-to-cart")}>
                                        {product.preOrder ? (
                                            <span>Pre-Order</span>
                                        ) : (
                                            <span>add to card</span>
                                        )}
                                    </button>
                                    <button className={cx("wishlist")}>
                                        <HeartOutlined
                                            style={{
                                                color: "#000",
                                                fontSize: "18px",
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>
                            <Radio className={cx("term-conditions")}>
                                <label>I agree with the </label>
                                <a href="/">term and conditions</a>
                            </Radio>
                            <button className={cx("buy-now")}>
                                Buy it now
                            </button>
                        </div>
                        <div className={cx("action-more")}>
                            <button className={cx("compare")}>
                                <CheckOutlined />
                                <span>Compare</span>
                            </button>
                            <button
                                className={cx("question")}
                                onClick={showQuestion}
                            >
                                <QuestionCircleOutlined />
                                <span>Ask a question</span>
                            </button>
                            <Modal
                                open={isQuestionOpen}
                                onCancel={handleCancelQuestion}
                                centered
                                footer={null}
                                style={{ maxWidth: "520px", width: "100%" }}
                            >
                                <div className={cx("question-form")}>
                                    <div className={cx("title")}>
                                        <h2>Ask a question</h2>
                                    </div>
                                    <Row gutter={[10, 15]}>
                                        <Col flex="50%">
                                            <Input
                                                size="large"
                                                placeholder="Your name"
                                                style={{
                                                    background: "#f4f4f4",
                                                    borderRadius: "0",
                                                    height: "50px",
                                                    color: "#868686",
                                                }}
                                                bordered={false}
                                            />
                                        </Col>
                                        <Col flex="50%">
                                            <Input
                                                size="large"
                                                placeholder="Your email"
                                                style={{
                                                    background: "#f4f4f4",
                                                    borderRadius: "0",
                                                    height: "50px",
                                                }}
                                                bordered={false}
                                            />
                                        </Col>
                                        <Col flex="100%">
                                            <Input
                                                size="large"
                                                placeholder="Phone Number"
                                                style={{
                                                    background: "#f4f4f4",
                                                    borderRadius: "0",
                                                    height: "50px",
                                                }}
                                                bordered={false}
                                            />
                                        </Col>
                                        <Col flex="100%">
                                            <Input.TextArea
                                                size="large"
                                                placeholder="Your message..."
                                                style={{
                                                    background: "#f4f4f4",
                                                    borderRadius: "0",
                                                }}
                                                bordered={false}
                                                type="textarea"
                                                rows={10}
                                            />
                                        </Col>
                                        <Col flex="100%">
                                            <button
                                                className={cx("send-message")}
                                            >
                                                send message
                                            </button>
                                        </Col>
                                        <Col flex="100%">
                                            <div className={cx("product")}>
                                                <div className={cx("img")}>
                                                    <img
                                                        src={
                                                            product.images.find(
                                                                (img) =>
                                                                    img.id === 1
                                                            ).image
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center ml-5 text-[16px]">
                                                    <span className=" capitalize">
                                                        {product.name}
                                                    </span>
                                                    <NumericFormat
                                                        thousandSeparator=","
                                                        value={newPrice}
                                                        suffix="₫"
                                                        displayType="text"
                                                        customInput="span"
                                                        renderText={(
                                                            value,
                                                            props
                                                        ) => (
                                                            <span
                                                                {...props}
                                                                className="text-[#868686]"
                                                            >
                                                                {value}
                                                            </span>
                                                        )}
                                                    ></NumericFormat>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Modal>
                            <button
                                className={cx("return")}
                                onClick={showReturn}
                            >
                                <InboxOutlined />
                                <span>Delivery & Return</span>
                            </button>
                            <Modal
                                open={isReturnOpen}
                                onCancel={handleCancelReturn}
                                centered
                                footer={null}
                                width="100%"
                                style={{ maxWidth: "700px", width: "" }}
                            >
                                <div className={cx("return-form")}>
                                    <div className={cx("title")}>
                                        <h2>Shipping info</h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <span>
                                            <b>Return Policy: </b>We will gladly
                                            accept returns for any reason within
                                            30 days of receipt of delivery.
                                        </span>
                                        <span>
                                            <b>Availability:</b> Ships anywhere
                                            in the United States
                                        </span>
                                        <span>
                                            <b>Processing Time:</b> Allow 3-4
                                            business days processing time for
                                            your order to ship.
                                        </span>
                                    </div>
                                </div>
                            </Modal>
                            <button className={cx("share")}>
                                <ShareAltOutlined />
                                <span>Share</span>
                            </button>
                        </div>
                        <div className={cx("border")}></div>
                        <div className={cx("estimate-delivery")}>
                            <div className="flex items-center border-r-[1px] border-[#efefef] pr-[15px]">
                                <CarOutlined style={{ fontSize: "20px" }} />
                            </div>
                            <span className="pl-[15px] text-[15px]">
                                Order in the next 12 hours 46 minutes to get it
                                between Wednesday, Apr 26 and Sunday, Apr 30
                            </span>
                        </div>
                        <div className={cx("border")}></div>
                    </Col>
                </Row>
            </div>
            <div className="tab">
                <Tabs
                    defaultActiveKey="1"
                    centered
                    style={{ color: "#000" }}
                    size="large"
                    items={[
                        {
                            label: "Description",
                            key: "1",
                            children: "Tab 1",
                        },
                        {
                            label: "Review",
                            key: "2",
                            children: "Tab 2",
                        },
                        {
                            label: "Shipping",
                            key: "3",
                            children: "Tab 3",
                        },
                        {
                            label: "Return",
                            key: "4",
                            children: "Tab 3",
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default ProductDetail;
