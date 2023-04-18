import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import CategoriesSlider from "@/components/CategoriesSlider";
import { Row, Col, Select, Menu, Checkbox, Slider, Breadcrumb, Badge, Drawer } from "antd";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard";
import { productList, colorList } from "@/services/product.service";
import { categoriesService } from "@/services/categories.service";

import { useState } from "react";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Sidebar() {
	const products = productList.getAllProduct();
	const categories = categoriesService.getAllCategory();
	const colors = colorList.getAllColor();
	const [price, setPrice] = useState(5023333);
	const [checkbox, setCheckbox] = useState(false)

	const setViewCheckbox = () => {
	  setCheckbox(checkbox => !checkbox)
	}
	const isChecked = checkbox ? "checked" : "not-checked";

	const sliderPrice = (range) => {
	    setPrice(range);
	}
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
    
	return (
		<aside className={cx("sidebar")}>
			<div className={cx("collections")}>
				<Menu 
					mode="inline"
					forceSubMenuRender={true}
					defaultOpenKeys={["collections", "availability", "price", "brand", "color", "size", "product"]}>
					<SubMenu title="Collections" key="collections" >
					{
						categories.map(item => (
							<MenuItem style={{paddingLeft: '0'}} key={item.name}   >
								<div className={cx("subtitle")} >
									<p>{item.name}</p>
									<span>11</span>
								</div>
							</MenuItem>
						))
					}
					</SubMenu>
					<SubMenu title="Availability" key="availability" >
						<MenuItem style={{paddingLeft: '0'}} key="in-stock" >
							<div className={cx("subtitle")} >
								<div className="flex gap-2 items-center">
									<input type="checkbox" />	
									<p>in stock</p>
								</div>
								<span>11</span>
							</div>
						</MenuItem>
						<MenuItem style={{paddingLeft: '0'}} key="out-stock">
							<div className={cx("subtitle")} >
								<div className="flex gap-2 items-center">
									<input type="checkbox" />
									<p>out of stock</p>
								</div>
								<span>11</span>
							</div>
						</MenuItem>
					</SubMenu>
					<SubMenu title="Price" key="price" >
						<div className="flex flex-col">
							<Slider
								min={0}
								max={5023333}
								onChange={sliderPrice}
								value={typeof price === 'number' ? price: 0}
							>
							</Slider>
							<p>0 - {price}</p>
						</div>
					</SubMenu>
					<SubMenu title="Brand" key="brand" >
					{
						products.map((brand) => (
							<MenuItem style={{paddingLeft: '0'}} onClick={setViewCheckbox} key={brand.brand} >
								<div className={cx("subtitle" , isChecked)}    >
									<div className="flex gap-2">
									{
										checkbox ? <input type="checkbox" checked  /> : <input type="checkbox"/>
									}
										<p>{brand.brand}</p>
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
								<MenuItem style={{paddingLeft: '0'}} key={color.name} >
									<div className={cx("subtitle")}  >
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
							<MenuItem style={{paddingLeft: '0'}} key="in">
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
	)
};

function Collection() {
    	const {wishlists} = useSelector((wishlist) => wishlist.wishlist);
	const {compares} = useSelector((compare) => compare.compare);
	const products = productList.getAllProduct();

   	const [display, setDisplay] = useState(2);

    	const setView = (display) => {
	  	setDisplay(display);
    	}

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};
	  
	const onClose = () => {
		setOpen(false);
	};

	

	return (
		<div className={cx("wrapper")}>
			<div className={cx("banner")}>
				<div className={cx("content")}>
					<div className={cx("heading")}>
						<h2>Products</h2>
					</div>
					<Breadcrumb 
						className="text-center w-fit mx-auto my-0" 
						items={[
							{title: <p className="cursor-pointer hover:text-text-hover-color">Home</p>},
							{title: 'Products'}
						]}>
					</Breadcrumb>
					<div className="max-w-[1440px]">
						<CategoriesSlider medium={false}/>
					</div>
				</div>
			</div>
			<div className="px-[15px] flex justify-center mt-[50px]">
				<Row className="max-w-[1440px] w-full" > 
					<Col className={cx("sidebar-contain")}>
						<Drawer placement="left" onClose={onClose} open={open} className={cx("drawer")}>
							<Sidebar/>
						</Drawer>
						<Sidebar/>
					</Col>
					<Col  className={cx("collection-content")}>
						<div className="flex justify-between mb-[25px] mx-[24.5px]">
							<div className={cx("filter-collection")}>
								<button onClick={showDrawer}>filter</button>
							</div>
							<Select
								defaultValue="featured"
								style={{width: '178px'}}
								options={[
									{ value: 'featured', label: 'Featured' },
									{ value: 'bestselling', label: 'Best Selling' },
									{ value: 'a-z', label: 'Alphabetically, A-Z' },
									{ value: 'z-a', label: 'Alphabetically, Z-A' },
									{ value: 'low-high', label: 'Price, low to high' },
									{ value: 'high-low', label: 'Price, high to low' },
									{ value: 'old-new', label: 'Date, old to new' },
									{ value: 'new-old', label: 'Date, new to old' },
								]}
								/>
								
							<div className={cx("collection-view")}>
								<div className={cx("item" )} onClick={()=>setView(2)} >
								{
									display === 2 ? 
										<p className={cx("two", "btn", "col")}><span/><span/></p>
									: 
										<p className={cx("btn", "col")}><span/><span/></p>
								}
								</div>
								<div className={cx("item")} onClick={()=> setView(3)}>
								{
									display === 3 ?
										<p  className={cx("three", "btn", "col")}><span/><span/><span/></p>
									:
										<p  className={cx( "btn", "col")}><span/><span/><span/></p>
								}   
								</div>
								<div className={cx("item")} onClick={()=> setView(4)}>
								{
									display === 4 ?
										<p className={cx("four", "btn", "col")}><span/><span/><span/><span/></p>
									:
										<p className={cx( "btn", "col")}><span/><span/><span/><span/></p>
								}
								</div>
								<div className={cx("item")} onClick={()=>setView(1)} >
								{
									display === 1 ?
										<p className={cx("list", "btn", "row")}><span/><span/><span/></p>
									:
										<p className={cx( "btn", "row")}><span/><span/><span/></p>
								}
								</div>
							</div>
						</div>
						{display === 2 ? 
							<div className={cx("product" , "grid-2")}>
								{products.map((item) => (
									<div className={cx("product-col")}>
										<ProductCard 
											row
											images={item.images} 
											name={item.name} 
											id={item.id} 
											price={item.price} 
											preOrder={item.preOrder}
											brand={item.brand}
											quantity={item.quantity}
											description={item.description}
											color={item.color}
											discount={item.discount}
											key={item.id} 
											button={true} 
											qtyCart={true}
											isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}
											isCompare={compares.some((compare) => compare.id === item.id)}/> 
									</div>
								))} 
							</div> 
						: 
						display === 3 ?
							<div className={cx("product" , "grid-3")}>
								{products.map((item) => (
									<div className={cx("product-col")}>
										<ProductCard 
											row
											images={item.images} 
											name={item.name} 
											id={item.id} 
											price={item.price} 
											preOrder={item.preOrder}
											description={item.description}
											quantity={item.quantity}
											color={item.color}
											discount={item.discount}
											key={item.id} 
											button={true} 
											qtyCart={true}
											brand={item.brand}
											isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}
											isCompare={compares.some((compare) => compare.id === item.id)}/> 
									</div>
								))} 
							</div> 
						: 
						display === 4 ?
							<div className={cx("product" , "grid-4")}>
								{products.map((item) => (
									<div className={cx("product-col")}>
										<ProductCard 
											row
											images={item.images} 
											name={item.name} 
											id={item.id} 
											price={item.price} 
											preOrder={item.preOrder}
											description={item.description}
											quantity={item.quantity}
											brand={item.brand}
											color={item.color}
											discount={item.discount}
											key={item.id} 
											button={true} 
											qtyCart={true}
											isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}
											isCompare={compares.some((compare) => compare.id === item.id)}/> 
									</div>
								))} 
							</div> 
						: 
						display === 1 ?
							<div className={cx("product" , "list")}>
								{products.map((item) => (
									<div className={cx("product-col")}>
										<ProductCard 
											row={false}
											images={item.images} 
											name={item.name} 
											id={item.id} 
											price={item.price} 
											preOrder={item.preOrder}
											description={item.description}
											quantity={item.quantity}
											brand={item.brand}
											color={item.color}
											discount={item.discount}
											key={item.id} 
											button={true} 
											qtyCart={true}
											isWishlist={wishlists.some((wishlist) => wishlist.id === item.id)}
											isCompare={compares.some((compare) => compare.id === item.id)}/> 
									</div>
								))} 
							</div>
						: ''
						}
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default Collection;