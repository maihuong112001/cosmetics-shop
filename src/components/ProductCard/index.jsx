import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import imagesProduct from "@/assets/images/Products";
import { ReactComponent as StarIcon } from "@/assets/images/star.svg";
import { NormalButton } from "../Button";
import { HeartOutlined, ShoppingOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";


const cx = classNames.bind(styles);

function ProductCard() {
  return (
          <div className={cx("wrapper")}>
            <div className={cx("inner-about")}>

            <div className={cx("image")}>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={imagesProduct.product_2} alt="" className={cx("img-visible fade-in lazyloaded")}/>
              </div>
              <div className={cx("preloading-img")} style={{paddingTop: '100%'}}>
            	  <img src={imagesProduct.product_1} alt="" className={cx("img-hidden", "fade-in", "lazyloaded")}/>
              </div>
            <div className={cx("button")}>
              <NormalButton><HeartOutlined/></NormalButton>
              <NormalButton><HeartOutlined/></NormalButton>
              <NormalButton><HeartOutlined/></NormalButton>
            </div>
            <div className={cx("cart-form")}>
              <form>
                <div className="border-r-[1px] border-r-[rgba(255,255,255,.5)] flex px-[20px] items-center">
                  <div className="h-[20px] w-[20px] rounded-[50%] hover:bg-white bg-transparent flex justify-center items-center" >
                    <MinusOutlined style={{fontSize: '8px', color:'#fff'}} className="hover:text-black"/>
                  </div>
                  <input className="bg-transparent w-[30px] leading-[40px]" ></input>
                  <div className="h-[20px] w-[20px] rounded-[50%] hover:bg-white bg-transparent flex justify-center items-center" >
                    <PlusOutlined style={{fontSize: '8px', color: '#fff'}} />
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
              <a href="/">Charm Club Bracelet</a>
              </div>
              <div className={cx("price")}>
                <span>2,342,656₫</span>
              </div>
            </div>
          </div>

          </div>
  );
};

export default ProductCard;