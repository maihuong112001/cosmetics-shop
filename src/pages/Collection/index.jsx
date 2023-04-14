import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import CategoriesSlider from "@/components/CategoriesSlider";
import { Row, Col, Select, Menu } from "antd";
import ProductCard from "@/components/ProductCard";
import { productList } from "@/services/product.service";
import { categoriesService } from "@/services/categories.service";
const cx = classNames.bind(styles);

function Collection() {
  const categories = categoriesService.getAllCategory();
  const products = productList.getAllProduct();
    const handleFilter = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onClick = (e) => {
        console.log('click ', e);
      };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <div className={cx("content")}>
                    <div className={cx("heading")}>
                        <h2>Products</h2>
                    </div>
                    <div className="max-w-[1440px]">
                        <CategoriesSlider/>
                    </div>
                </div>
            </div>
            <div className="px-[15px] flex justify-center mt-[50px]">
                <Row className="max-w-[1440px] w-full" > 
                    <Col flex="25%">
                        <aside className={cx("sidebar")}>
                          <div className={cx("collections")}>
                              <h4 className={cx("title")}>
                                <label>Collections</label>
                              </h4>
                              <ul>
                                <li className="flex justify-between">
                                  <span></span>
                                  <span>11</span>
                                </li>
                              </ul>
                            </div>
                        </aside>
                    </Col>
                    <Col flex="75%" className={cx("collection-content")}>
                        <div className="flex justify-between mb-[25px]">
                            <Select
                                defaultValue="a-z"
                                onChange={handleFilter}
                                options={[
                                    { value: 'featured', label: 'Featured' },
                                    { value: 'bestselling', label: 'Best Selling' },
                                    { value: 'a-z', label: 'Alphabetically, A-Z' },
                                    { value: 'z-a', label: 'Alphabetically, Z-A' },
                                    { value: 'low-high', label: 'Price, low to high' },
                                    { value: 'high-low', label: 'Price, high to low' },
                                    { value: 'old-new', label: 'Date, old to new' },
                                    { value: 'new-old', label: 'Date, new to old' },
                                  ]}/>
                                  <div className={cx("collection-view")}>
                                    <div className={cx("item")}>
                                        <a href="/" className={cx("two", "btn", "col")}><span/><span/></a>
                                    </div>
                                    <div className={cx("item")}>
                                        <a href="/" className={cx("two", "btn", "col")}><span/><span/><span/></a>
                                    </div>
                                    <div className={cx("item")}>
                                        <a href="/" className={cx("two", "btn", "col")}><span/><span/><span/><span/></a>
                                    </div>
                                    <div className={cx("item")}>
                                        <a href="/" className={cx("two", "btn", "row")}><span/><span/></a>
                                    </div>
                                  </div>
                        </div>
                        <div className={cx("product" , "grid-2")}>
                             {products.map((item) => (
                                <div className={cx("product-col")}>
                                <ProductCard images={item.images} name={item.name} 
                                                            id={item.id} price={item.price} key={item.id} button={true} qtyCart={true}/> 
                                                            </div>
                             ))}
                              
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Collection;