import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Wishlist.module.scss";
import ProductCard from "@/components/ProductCard";
import { settings } from "@/services/settings.service";
import Slider from "react-slick";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Wishlist () {
          const {wishlists} = useSelector((item) => item.addWishlist)
          console.log(wishlists)
          return (
                    
                    <div className={cx("wrapper")}>
                              <div className={cx("title")}>
                                        <h2 className="text-[60px]">Wishlist</h2>
                              </div>
                              
                              {/* {wishlist.length === 0 && (<div>There are no products in wishlist</div>)} */}
                              <div className="w-[90%]">
                                        <Slider {...settings}>
                                        {
                                                  wishlists?.map((item) => (
                                                            <ProductCard images={item.images} name={item.name} 
                                                            id={item.id} price={item.price} key={item.id} button={false} qtyCart={false}/> 
                                                  ))
                                        }
                                        </Slider>

                              </div>
                              
                    </div>

          )
};

export default Wishlist;