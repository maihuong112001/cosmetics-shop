import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { ReactComponent as StarIcon } from "@/assets/images/star.svg";
import { ReactComponent as CompareIcon } from "@/assets/images/Products/down-up-arrow-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/Products/search-svgrepo-com.svg";
import { ReactComponent as ShoppingBag } from "@/assets/images/Products/bag-2-svgrepo-com.svg";
import { NormalButton } from "../Button";
import {
  HeartOutlined,
  ShoppingOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { AddWishlist } from '@/store/wishlist';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function ProductCard(product, { ...passProps}) {
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
  const cartForm = product.qtyCart ? cx("cart-form") : cx("cart-form-type-2")
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
            <div className={button}>
              <NormalButton onClick={()=>dispatch(AddWishlist(product))} ><HeartOutlined/></NormalButton>
              <NormalButton ><ShoppingBag/></NormalButton>
              <NormalButton><CompareIcon/></NormalButton>
              <NormalButton><SearchIcon/></NormalButton>
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
                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
              </div>
              <div className={cx("name")}>
              <a href="/">{product.name}</a>
              </div>
              <div className={cx("price")}>
                <span>{product.price}</span>
              </div>
            </div>
          </div>

          </div>
  );
}

export default ProductCard;
