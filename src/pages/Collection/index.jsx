import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import CategoriesSlider from "@/components/CategoriesSlider";
import { Row, Col, Select, Menu, Checkbox, Slider, Breadcrumb, Badge } from "antd";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard";
import { productList, colorList } from "@/services/product.service";
import { brandsService } from "@/services/brand.service";
import { categoriesService } from "@/services/categories.service";

import { useState } from "react";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Collection() {
    const {wishlists} = useSelector((wishlist) => wishlist.addWishlist)
  const categories = categoriesService.getAllCategory();
  const products = productList.getAllProduct();
  const brands = brandsService.getAllBrands();
  const colors = colorList.getAllColor();
    const handleFilter = (value) => {
        console.log(`selected ${value}`);
      };
      
    
    const MenuItem = styled(Menu.Item)`
      .ant-menu-item {
        padding-left: 0 !important;
      }
      
    `;
    const SubMenu = styled(Menu.SubMenu)`
    .ant-menu-submenu-title{
        padding: 0 !important;
        
        
      }
      .ant-menu-title-content {
        font-family: var(--heading-text);
        cursor: pointer;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    `;
    

    const [display, setDisplay] = useState(1);

    const setView = (display) => {
        setDisplay(display);
    }


    const [price, setPrice] = useState(5023333);

    const sliderPrice = (range) => {
        setPrice(range);
    }

    const view = display === 1 ? "grid-1" : display === 2 ? "grid-2" : display === 3 ? "grid-3" : display === 4 ? "grid-4" : "grid-2";

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner")}>
                <div className={cx("content")}>
                    <div className={cx("heading")}>
                        <h2>Products</h2>
                    </div>
                    <Breadcrumb className="text-center w-fit mx-auto my-0">
                        <Breadcrumb.Item className="cursor-pointer hover:text-text-hover-color">Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Products</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="max-w-[1440px]">
                        <CategoriesSlider medium={false}/>
                    </div>
                </div>
            </div>
            <div className="px-[15px] flex justify-center mt-[50px]">
                <Row className="max-w-[1440px] w-full" > 
                    <Col flex="25%">
                        <aside className={cx("sidebar")}>
                          <div className={cx("collections")}>
                            <Menu 
                                mode="inline"
                                defaultOpenKeys={["collections", "availability", "price", "brand"]}>
                                    <SubMenu title="Collections" key="collections" >
                                        {
                                            categories.map(item => (

                                                <MenuItem style={{paddingLeft: '0'}} >
                                                    <div className={cx("subtitle")} >
                                                        <p>{item.name}</p>
                                                        <span>11</span>
                                                    </div>
                                                </MenuItem>
                                            ))
                                        }
                                    </SubMenu>
                                    <SubMenu title="Availability" key="availability" >
                                        <MenuItem style={{paddingLeft: '0'}} >
                                            <div className={cx("subtitle")} >
                                                <div className="flex gap-2">
                                                    <Checkbox indeterminate />
                                                    <p>in stock</p>
                                                </div>
                                                <span>11</span>
                                            </div>
                                        </MenuItem>
                                        <MenuItem style={{paddingLeft: '0'}} >
                                            <div className={cx("subtitle")} >
                                                <div className="flex gap-2">
                                                    <Checkbox indeterminate />
                                                    <p>out of stock</p>
                                                </div>
                                                <span>11</span>
                                            </div>
                                        </MenuItem>
                                    </SubMenu>
                                    <SubMenu title="Price" key="price" >
                                        <MenuItem style={{paddingLeft: '0'}}>
                                                <Slider
                                                    min={0}
                                                    max={5023333}
                                                    onChange={sliderPrice}
                                                    value={typeof price === 'number' ? price: 0}
                                                >
                                                </Slider>
                                        </MenuItem>
                                        <MenuItem style={{paddingLeft: '0'}}>
                                            <p>0 - {price}</p>
                                        </MenuItem>
                                        
                                    </SubMenu>
                                    <SubMenu title="Brand" key="brand" >
                                    {
                                        brands.map((brand) => (
                                            <MenuItem style={{paddingLeft: '0'}} >
                                                <div className={cx("subtitle")} >
                                                    <div className="flex gap-2">
                                                        <Checkbox indeterminate />
                                                        <p>{brand.name}</p>
                                                    </div>
                                                    <span>11</span>
                                                </div>
                                            </MenuItem>
                                        ))
                                    }
                                        
                                    </SubMenu>
                                    <SubMenu title="Color" key="color" >
                                    {
                                        colors.map((color) => (
                                            <MenuItem style={{paddingLeft: '0'}} >
                                                <div className={cx("subtitle")} >
                                                    <div className="flex ">
                                                        <div className={cx("color")} style={{backgroundColor: color.color}}></div>
                                                        <p>{color.name}</p>
                                                    </div>
                                                    
                                                    <span>11</span>
                                                </div>
                                            </MenuItem>
                                        ))
                                    }
                                        
                                    </SubMenu>
                                    <SubMenu title="size" key="size" >
                                        <div className="flex gap-5 ">
                                            <Badge count={1} color="#868686">
                                                <div className={cx("size")}>S</div>
                                            </Badge>
                                            <Badge count={1} color="#868686">
                                                <div className={cx("size")}>L</div>
                                            </Badge>
                                            <Badge count={1} color="#868686">
                                                <div className={cx("size")}>XL</div>
                                            </Badge>
                                        </div>
                                        
                                        
                                    </SubMenu>
                                    <SubMenu title="featured product" key="product" >
                                        <MenuItem style={{paddingLeft: '0'}}>
                                                <Slider
                                                    min={0}
                                                    max={5023333}
                                                    onChange={sliderPrice}
                                                    value={typeof price === 'number' ? price: 0}
                                                >
                                                </Slider>
                                        </MenuItem>
                                        <MenuItem style={{paddingLeft: '0'}}>
                                            <p>0 - {price}</p>
                                        </MenuItem>
                                        
                                    </SubMenu>
                            </Menu>

                            </div>

                        </aside>
                    </Col>
                    <Col flex="75%" className={cx("collection-content")}>
                        <div className="flex justify-between mb-[25px] mx-[24.5px]">
                            <Select
                                defaultValue="az"
                                onChange={handleFilter}
                                style={{width: '178px'}}
                                options={[
                                    { value: 'featured', label: 'Featured' },
                                    { value: 'bestselling', label: 'Best Selling' },
                                    { value: 'az', label: 'Alphabetically, A-Z' },
                                    { value: 'z-a', label: 'Alphabetically, Z-A' },
                                    { value: 'low-high', label: 'Price, low to high' },
                                    { value: 'high-low', label: 'Price, high to low' },
                                    { value: 'old-new', label: 'Date, old to new' },
                                    { value: 'new-old', label: 'Date, new to old' },
                                  ]}
                                  />
                                  <div className={cx("collection-view")}>
                                    <div className={cx("item" )} onClick={()=>setView(2)} >
                                        <p className={cx("two", "btn", "col")}><span/><span/></p>
                                    </div>
                                    <div className={cx("item")} onClick={()=> setView(3)}>
                                        <p  className={cx("three", "btn", "col")}><span/><span/></p>
                                    </div>
                                    <div className={cx("item")} onClick={()=> setView(4)}>
                                        <p className={cx("four", "btn", "col")}><span/><span/></p>
                                    </div>
                                    <div className={cx("item")} onClick={()=>setView(1)} >
                                        <p className={cx("list", "btn", "row")}><span/><span/></p>
                                    </div>
                                </div>
                                  
                        </div>
                        <div className={cx("product" , view)}>
                            {products.map((item) => (
                            <div className={cx("product-col")}>
                            <ProductCard 
                                images={item.images} 
                                name={item.name} 
                                id={item.id} 
                                price={item.price} 
                                key={item.id} 
                                button={true} 
                                qtyCart={true}
                                isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}/> 
                            </div>
                            ))} 
                        </div> 
                        {/* {display === 2 ? 
                            <div className={cx("product" , "grid-2")}>
                            {products.map((item) => (
                            <div className={cx("product-col")}>
                            <ProductCard 
                                images={item.images} 
                                name={item.name} 
                                id={item.id} 
                                price={item.price} 
                                key={item.id} 
                                button={true} 
                                qtyCart={true}
                                isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}/> 
                            </div>
                            ))} 
                            </div> 
                        : 
                        display === 3 ?
                            <div className={cx("product" , "grid-3")}>
                            {products.map((item) => (
                                <div className={cx("product-col")}>
                                <ProductCard 
                                    images={item.images} 
                                    name={item.name} 
                                    id={item.id} 
                                    price={item.price} 
                                    key={item.id} 
                                    button={true} 
                                    qtyCart={true}
                                    isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}/> 
                            </div>
                            ))} 
                            </div> 
                        : 
                        display === 4 ?
                            <div className={cx("product" , "grid-2")}>
                            {products.map((item) => (
                                <div className={cx("product-col")}>
                                <ProductCard 
                                    images={item.images} 
                                    name={item.name} 
                                    id={item.id} 
                                    price={item.price} 
                                    key={item.id} 
                                    button={true} 
                                    qtyCart={true}
                                    isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}/> 
                            </div>
                            ))} 
                            </div> 
                        : 
                        display === 1 ?
                            <div className={cx("product" , "grid-2")}>
                            {products.map((item) => (
                                <div className={cx("product-col")}>
                                <ProductCard 
                                    images={item.images} 
                                    name={item.name} 
                                    id={item.id} 
                                    price={item.price} 
                                    key={item.id} 
                                    button={true} 
                                    qtyCart={true}
                                    isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}/> 
                            </div>
                            ))} 
                            </div>
                        : ''
                        }
                         */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Collection;