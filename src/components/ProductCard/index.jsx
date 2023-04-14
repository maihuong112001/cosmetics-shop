import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { ReactComponent as CompareIcon } from "@/assets/images/Products/down-up-arrow-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/Products/search-svgrepo-com.svg";
import { ReactComponent as ShoppingBag } from "@/assets/images/Products/bag-2-svgrepo-com.svg";
import { ReactComponent as Delete } from "@/assets/images/Products/trash-2-svgrepo-com.svg";
import { NormalButton } from "../Button";
import {
  HeartOutlined,
  ShoppingOutlined,
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Rate, Tooltip } from "antd";
import { AddWishlist } from '@/store/slices/wishlist.slice';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function ProductCard(product) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  
  const button = product.button ? cx("button" ) : cx ("button-type2");
  const cartForm = product.qtyCart ? cx("cart-form") : cx("cart-form-type-2");
  const wishlist = product.onWishlistPage ? cx("btn-trash") : cx("btn-trash-2")
  return (
          <div className={cx("wrapper")}>
            <div className={cx("inner-about")}>
            <div className={cx("image")}>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={product.images.img_1} alt="" className={cx("img-visible")}/>
              </div>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={product.images.img_2}  alt="" className={cx("img-hidden", "fade-in", "lazyloaded")}/>
              </div>
            <div className={wishlist}>
              <NormalButton normal><Delete/></NormalButton>
            </div>
            <div className={button}>
              {product.isWishlist ?  
                <Tooltip placement="top" title="Remove Wishlist">
                  <NormalButton wishlistAdded ><HeartFilled style={{color:'white'}}/></NormalButton>
                </Tooltip>
                :
                <Tooltip placement="top" title="Wishlist">
                  <NormalButton onClick={()=>dispatch(AddWishlist(product))} normal ><HeartOutlined/></NormalButton>
                </Tooltip>
              }
              
              <NormalButton normal ><ShoppingBag/></NormalButton>
              <Tooltip placement="top" title="Compare">
                <NormalButton normal><CompareIcon/></NormalButton>
              </Tooltip>
              
              <NormalButton normal><SearchIcon/></NormalButton>
            </div>
            <div className={cartForm}>
              <form>
                <div className="border-r-[1px] border-r-[rgba(255,255,255,.5)] flex px-[20px] items-center">
                  <div className={cx('qty-btn')} onClick={decreaseQuantity}>
                    <MinusOutlined style={{fontSize: '12px', color:'#fff'}} className={cx('gsx')}/>
                  </div>
                  <input className="bg-transparent w-[30px] leading-[40px]" value={quantity} readOnly pattern="[0-9]"></input>
                  <div className={cx('qty-btn')} onClick={increaseQuantity}>
                    <PlusOutlined style={{fontSize: '12px', color: '#fff'}} />
                  </div>
                </div>
                <div className={cx('cart-btn')}    >
                <ShoppingOutlined style={{fontSize: '20px', color: '#fff'}} className={cx('icon')}/>
                </div>
                
              </form>
            </div>
            </div>
            <div className={cx("content")}>
              <div className={cx("ratting")}>
                <Rate disabled defaultValue={5} style={{fontSize: '12px'}}/>
              </div>
              <div className={cx("name")}>
                <a href="/">{product.name}</a>
              </div>
              <div className="flex justify-center gap-2">
                <div className={cx("price")}>
                  <span>{product.price}</span>
                </div>
                {product.preOrder ? <div className="text-green-color">( Pre-Order ) </div> : null}
              </div>
            </div>
          </div>

          </div>
  );
}

export default ProductCard;
