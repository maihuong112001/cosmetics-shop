
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import imagesProduct from "@/assets/images/Products";
import { ReactComponent as StarIcon } from "../../../../assets/images/star.svg";
import { HeartOutlined, ShoppingOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";


const cx = classNames.bind(styles);

function SubscribeForm() {
  return (
          <div className={cx("wrapper")}>
            <div className={cx("image")}>
            	<img src={imagesProduct.product_1} alt=""/>
            <div className={cx("button")}>
              <div><HeartOutlined/></div>
              <div><HeartOutlined/></div>
              <div><HeartOutlined/></div>
            </div>
            <div className={cx("cart-form")}>
              <form>
                <div className="border-r-[rgba(255,255,255,.5)] flex">
                  <div className="h-[20px] w-[20px] rounded-[50%] hover:bg-white bg-transparent" >
                    <MinusOutlined/>
                  </div>
                  <input className="bg-transparent"></input>
                  <div className="h-[20px] w-[20px] rounded-[50%] hover:bg-white bg-transparent" >
                    <PlusOutlined style={{fontSize: '12px', color: '#fff'}}/>
                  </div>
                </div>
                <ShoppingOutlined/>
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
  );
}

export default SubscribeForm;
