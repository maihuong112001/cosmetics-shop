import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { ReactComponent as StarIcon } from "@/assets/images/star.svg";
import { ReactComponent as CompareIcon } from "@/assets/images/Products/down-up-arrow-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/Products/search-svgrepo-com.svg";
import { NormalButton } from "../Button";
import { HeartOutlined, ShoppingOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

function ProductCard(props) {
  return (
          <div className={cx("wrapper")}>
            <div className={cx("inner-about")}>

            <div className={cx("image")}>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={(props.img1)} alt="" className={cx("img-visible fade-in lazyloaded")}/>
              </div>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={props.img2} alt="" className={cx("img-hidden", "fade-in", "lazyloaded")}/>
              </div>
            <div className={cx("button")}>
              <NormalButton><HeartOutlined/></NormalButton>
              <NormalButton><CompareIcon/></NormalButton>
              <NormalButton><SearchIcon/></NormalButton>
            </div>
            <div className={cx("cart-form")}>
              <form>
                <div className="border-r-[1px] border-r-[rgba(255,255,255,.5)] flex px-[20px] items-center">
                  <div className={cx('qty-btn')} >
                    <MinusOutlined style={{fontSize: '12px', color:'#fff'}} className={cx('gsx')}/>
                  </div>
                  <input className="bg-transparent w-[30px] leading-[40px]" value={1} pattern="[0-9]"></input>
                  <div className={cx('qty-btn')}>
                    <PlusOutlined style={{fontSize: '12px', color: '#fff'}} />
                  </div>
                </div>
                <div className={cx('cart-btn')}>
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
              <a href="/">{props.name}</a>
              </div>
              <div className={cx("price")}>
                <span>{props.price}</span>
              </div>
            </div>
          </div>

          </div>
  );
};

export default ProductCard;