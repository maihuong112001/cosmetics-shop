import classNames from "classnames/bind";
import { Breadcrumb } from "antd";
import styles from "./Wishlist.module.scss";
import ProductCard from "@/components/ProductCard";
import { settings } from "@/services/settings.service";
import Slider from "react-slick";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Wishlist () {
          const {wishlists} = useSelector((item) => item.wishlist);
          const {compares} = useSelector((compare) => compare.compare);
          return (
                    
                    <div className={cx("wrapper")}>
                              <div className={cx("title")}>
                                        <h2 className="text-[60px]">Wishlist</h2>
                                        <Breadcrumb className="text-center w-fit mx-auto my-0">
                                                  <Breadcrumb.Item className="cursor-pointer hover:text-text-hover-color">Home</Breadcrumb.Item>
                                                  <Breadcrumb.Item>Wishlist</Breadcrumb.Item>
                                        </Breadcrumb>
                              </div>
                              
                              {wishlists.length === 0 && (<div>There are no products in wishlist</div>)}
                              <div className="w-full flex justify-center">
                                        <div className={cx("content")}>
                                                  {
                                                            wishlists?.map((item) => (
                                                                      <ProductCard 
                                                                                row
                                                                                images={item.images} 
                                                                                name={item.name} 
                                                                                id={item.id} 
                                                                                price={item.price} 
                                                                                preOrder={item.preOrder}
                                                                                quantity={item.quantity}
                                                                                brand={item.brand}
                                                                                description={item.description}
                                                                                color={item.color}
                                                                                key={item.id} 
                                                                                button={false} 
                                                                                qtyCart={false} 
                                                                                isWishlist={item.isWishlist}
                                                                                onWishlistPage={true}
                                                                                isCompare={compares.some((compare) => compare.id === item.id)}/> 
                                                            ))
                                                  }


                                        </div>
                              </div>
                              
                    </div>

          )
};

export default Wishlist;