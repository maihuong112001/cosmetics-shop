import { Carousel, Col, Row } from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import classNames from "classnames/bind";
import SubscribeForm from "@/components/SubscribeForm";
import BrandCard from "@/components/BrandCard";
import Feedback from "@/components/Feadback";
import { NextArrowButton, PreviousArrowButton } from "@/components/Button";
import { ReactComponent as DiamondIcon } from "../../assets/images/Home/diamond.svg";
import { ReactComponent as NeckLaceIcon } from "../../assets/images/Home/necklace.svg";
import Slider from "react-slick";
import styles from "./Home.module.scss";
import images from "@/assets/images";
import imagesHome from "@/assets/images/Home";

const cx = classNames.bind(styles);

const topCategories = [
  {
    id: 1,
    name: 'NECKLACES',
    image: imagesHome.top_cate_1,
  },
  {
    id: 1,
    name: 'WEDDING & BRIDAL',
    image: imagesHome.top_cate_2,
  },
  {
    id: 1,
    name: 'EARNINGS',
    image: imagesHome.top_cate_3,
  },
  {
    id: 1,
    name: 'BRACELETS',
    image: imagesHome.top_cate_4,
  },
  {
    id: 1,
    name: 'CHARMS',
    image: imagesHome.top_cate_5,
  },
]
  

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrowButton />,
  prevArrow: <PreviousArrowButton />,
  responsive: [
    {

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]}
function Home() {
  return (
    <div className={cx("wrapper")}>
      <Carousel effect="fade">
        <div>
          <img src={images.slider_1} alt="slider-2" className="w-100"></img>
        </div>
        <div>
          <img src={images.slider_2} alt="slider-2" className="w-100"></img>
        </div>
        <div>
          <img src={images.slider_3} alt="slider-2" className="w-100"></img>
        </div>
      </Carousel>
      <Row className={cx("banner")}>
          <Col flex="36.75%" className={cx("banner-item")}>
            <div className="box-border overflow-hidden">
              <a href="/" className="block">
                <img src={imagesHome.banner_1} alt="" />
              </a>
            </div>
            <div className="z-[100] absolute bottom-0 pb-[50px] flex flex-col">
              <h3 className={cx("banner-title")}>NEW ARRIVALS</h3>
              <a href="/" className={cx("banner-btn")}>SHOP NOW</a>
            </div>
          </Col>
          <Col flex="26.5%"className={cx("banner-item")}>
          <div className="box-border overflow-hidden">
              <a href="/" className="block">
                <img src={imagesHome.banner_2} alt="" />
              </a>
            </div>
            <div className="z-[100] absolute bottom-0 pb-[50px] flex flex-col items-center">
              <h3 className={cx("banner-title")}>BEST SELLER</h3>
              <a href="/" className={cx("banner-btn")}>SHOP NOW</a>
            </div>
          </Col>
          <Col  flex="36.75%" className={cx("banner-item")}>
          <div className="box-border overflow-hidden">
              <a href="/" className="block">
                <img src={imagesHome.banner_3} alt="" />
              </a>
            </div>
            <div className="z-[100] absolute bottom-0 pb-[50px] flex flex-col ">
              <h3 className={cx("banner-title")}>CLEARANCE SALE</h3>
              <a href="/" className={cx("banner-btn")}>SHOP NOW</a>
            </div>
          </Col>
        </Row>
      <h3 className={cx("heading")}>TOP CATEGORIES</h3>
      <div className="w-[70%] m-auto">
        <Slider {...settings}>
          {topCategories.map((category) =>  (
            <div className={cx("category-item")}>
            <div className="rounded-[50%]">
              <img src={category.image} alt="" className="rounded-[50%] cursor-pointer"/>
            </div>
            <a href="/" className={cx("category-item__title")}>{category.name}</a>
          </div>
          ))}
          
        </Slider>
      </div>
      <Row className={cx("collection-content")}>
        <Col flex="57.3%" className="gap-3 " >
          <div className="max-w-[630px] flex flex-col mx-auto my-0 gap-[40px]">
            <h2>HANDCRAFTED & <br/> ETHICALLY SOURCED</h2>
            <div className={cx("collection-item")}>
              <div className="w-[68px] h-[68px] rounded-[50%] bg-[#FFAD76] flex justify-center items-center">
                <DiamondIcon className=""/>
              </div>
              <div className={cx("content")}>
                <h3>FAIR PRICING</h3>
                <span>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra</span>
              </div>
            </div>
            <div className={cx("collection-item")}>
              <div className="w-[68px] h-[68px] rounded-[50%] bg-[#FFAD76] flex justify-center items-center">
                <NeckLaceIcon/>
              </div>
              <div className={cx("content")}>
                <h3>HIGH QUALITY</h3>
                <span>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra</span>
              </div>
            </div>
            <a href="/" className={cx("learn-more")}>
              <span>LEARN MORE</span>
              <ArrowRightOutlined className={cx("icon")}/>
            </a>
          </div>
        </Col>
        <Col flex="42.6%">
          <img src={imagesHome.collection_img} alt=""/>
        </Col>
      </Row>
      <Row className={cx("collection-banner")} >
        <Col flex="50%" className={cx("collection")}>
          <div className="box-border overflow-hidden">
            <a href="/" className="block">
              <img src={imagesHome.banner_6} alt="" />
            </a>
          </div>
          <div className={cx("info")}>
            <h3 className={cx("banner-title")}>SUMMER COLLECTIONS</h3>
            <p>Freshwater pearl necklace and earrings</p>
            <a href="/" className={cx("learn-more")}>
              <span>EXPLORE</span>
              <ArrowRightOutlined className={cx("icon")}/>
            </a>
          </div>
        </Col>
        <Col flex="50%" className={cx("collection")}>
        <div className="box-border overflow-hidden">
            <a href="/" className="block">
              <img src={imagesHome.banner_7} alt="" />
            </a>
          </div>
          <div className={cx("info")}>
            <h3 className={cx("banner-title")}>MAKE IT MEMORABLE</h3>
            <p>Freshwater pearl necklace and earrings</p>
            <a href="/" className={cx("learn-more")}>
              <span>EXPLORE</span>
              <ArrowRightOutlined className={cx("icon")}/>
            </a>
          </div>
        </Col>
      </Row>
      <div className={cx("feedback-contain")}>
        <h2 className={cx("heading")}>TESTIMNONAILS</h2>
        <Feedback/>
      </div>
      <SubscribeForm/>
      <BrandCard/>
    </div>
  );
}

export default Home;
