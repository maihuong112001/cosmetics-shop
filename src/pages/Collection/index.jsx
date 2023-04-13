import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import CategoriesSlider from "@/components/CategoriesSlider";
import { Row, Col, Select, Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ProductCard from "@/components/ProductCard";

const cx = classNames.bind(styles);

function getItem(label, key, children, type, className) {
    return {
        className,
      key,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Collections', 'sub1', [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Availability', 'sub2', [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    {
      type: 'divider',
    },
    getItem('Price', 'sub4',  [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

function Collection({productList}) {
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
                        <aside className="px-[15px]">
                        <Menu
                        className={cx("menu")}
      onClick={onClick}
      style={{
        background: 'transparent',
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
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
                             {productList.map((item) => (
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