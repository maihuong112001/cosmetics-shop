import React from 'react';
import {Col, Row } from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import classNames from "classnames/bind";
import SubscribeForm from "@/components/SubscribeForm";
import BrandCard from "@/components/BrandCard";
import Feedback from "@/components/Feedback";
import ProductCard from "@/components/ProductCard";
import { SectionLine } from "@/components/Line";
import { ReactComponent as DiamondIcon } from "../../assets/images/Home/diamond.svg";
import { ReactComponent as NeckLaceIcon } from "../../assets/images/Home/necklace.svg";
import Slider from "react-slick";
import styles from "./Home.module.scss";
import images from "@/assets/images";
import imagesHome from "@/assets/images/Home";
import CategoriesSlider from '@/components/CategoriesSlider';
import { productList } from '@/services/product.service';
import { bannerSettings, settings } from '@/services/settings.service';
import { useSelector } from 'react-redux';


const cx = classNames.bind(styles);


function Home() {
  const products = productList.getAllProduct();
  const {wishlists} = useSelector((item) => item.wishlist)
  const {compares} = useSelector((compare) => compare.compare);
  return (
    <div className={cx("wrapper")}>
      <Slider {...bannerSettings} >
      <div className="relative">
          <img src={images.slider_1} alt="slider-2" className={cx('fade-in', 'lazyloaded')} style={{width: '100%'}}></img>
          <div className="absolute top-0 w-full h-full left-0 flex justify-center">
            <div className="absolute z-10 flex justify-start top-[35%] max-w-[1440px] mx-auto px-[15px] w-full flex-col">
              <h2 className={cx('banner-content', 'leftright')}>
                Discover a  
                <br/>
                world of jewelry
                </h2>
              <a href="/" className={cx("button-slider")}>EXPLORE BESTSELLER</a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={images.slider_2} alt="slider-2" className={cx('fade-in', 'lazyloaded')} style={{width: '100%'}}></img>
          <div className="absolute top-0 w-full h-full left-0 flex justify-center">
            <div className="absolute z-10 flex justify-start top-[35%] max-w-[1440px] mx-auto px-[15px] w-full flex-col">
              <h2 className={cx('banner-content', 'leftright')}>
                Discover a  
                <br/>
                Best of the Best
              </h2>
              <a href="/" className={cx("button-slider")}>EXPLORE BESTSELLER</a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={images.slider_3} alt="slider-2" className={cx('fade-in', 'lazyloaded')} style={{width: '100%'}}></img>
          <div className="absolute top-0 w-full h-full left-0 flex justify-center">
            <div className="absolute z-10 flex justify-start top-[35%] max-w-[1440px] mx-auto px-[15px] w-full flex-col">
              <h2 className={cx('banner-content', 'leftright')}>
                Oh, 
                <br/>
                Hello Newness!
                </h2>
                <a href="/" className={cx("button-slider")}>EXPLORE BESTSELLER</a>
            </div>
          </div>
        </div>
      </Slider>

      <Row className={cx("banner")}>
          <Col flex="36.75%" className={cx("banner-item")}>
            <div className="box-border overflow-hidden">
              <a href="/" className="block overflow-hidden">
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
              <a href="/" className="block overflow-hidden">
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
              <a href="/" className="block overflow-hidden">
                <img src={imagesHome.banner_3} alt="" />
              </a>
            </div>
            <div className="z-[100] absolute bottom-0 pb-[50px] flex flex-col ">
              <h3 className={cx("banner-title")}>CLEARANCE SALE</h3>
              <a href="/" className={cx("banner-btn")}>SHOP NOW</a>
            </div>
          </Col>
        </Row>
      <h3 className={cx("heading")} style={{margin: '30px auto'}}>TOP CATEGORIES</h3>
      <div className="w-[80%] m-auto ">
        <CategoriesSlider medium={true}/>
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
      <h3 className={cx("heading")} style={{margin: '30px auto'}}>TRENDING PRODUCTS</h3>
      <div className="w-[95%] m-auto">
        <Slider {...settings}>
          {
            products.map((product) => (
              
              <ProductCard 
                row 
                images={product.images} 
                name={product.name} 
                id={product.id} 
                price={product.price} 
                preOrder={product.preOrder} 
                quantity={product.quantity}
								brand={product.brand}
                description={product.description}
                color={product.color}
                discount={product.discount}
                key={product.id} 
                product = {product} 
                button={true} 
                qtyCart={true} 
                isWishlist={wishlists.some((item) => item.id === product.id)}
                isCompare={compares.some((compare) => compare.id === product.id)}
                />
            ))
          }
          
        </Slider>
      </div>
      <Row className={cx("collection-banner")} >
        <Col flex="50%" className={cx("collection")}>
          <div className="box-border overflow-hidden">
            <a href="/" className="block overflow-hidden">
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
            <a href="/" className="block overflow-hidden">
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
      <SectionLine/>
      <BrandCard/>
    </div>
  );
}

export default Home;
