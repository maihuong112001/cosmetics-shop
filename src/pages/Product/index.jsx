import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { ArrowRightOutlined } from "@ant-design/icons";
import { categoriesService } from "@/services/categories.service";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Product() {
  const categories = categoriesService.getAllCategory();
  return(
    <div className={cx("wrapper")}>
       <div className={cx("container")}>
        {
          categories.map(category =>(
            <div className={cx("item")}>
              <div className={cx("card")}>
                <div className={cx("link")}>
                  <div className={cx("image")}>
                    <img src={category.image} alt=""/>
                  </div>
                  <div className={cx("view-all")}>
                    <Link to="/collection">
                      View All
                      <ArrowRightOutlined style={{fontSize: '12px'}}/>
                    </Link>
                  </div>
                </div>
                <div className={cx("title")}>
                  <h4>{category.name}</h4>
                  <p>11 Products</p>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </div>
  );
}

export default Product;

