import React from 'react';
import classNames from "classnames/bind";
import Slider from 'react-slick';
import { categoriesService } from '@/services/categories.service';
import { settings, settingsInCollection } from "@/services/settings.service";
import styles from "./CategoriesSlider.module.scss"

const cx = classNames.bind(styles);

function CategoriesSlider({medium}) {
	
					const categoryList = categoriesService.getAllCategory();

	return (
		<div className={cx("wrapper")}>
			{
				medium ? 
			
				<div className="">
					<Slider {...settings} className="px-[20px] ">
						{categoryList.map((category) =>  (
							<div key={category.id} className={cx("category-item", "style-1")}>
								<div className={cx("image")}>
									<img src={category.image} alt="" className="rounded-[50%] cursor-pointer"/>
								</div>
								<a href="/" className={cx("category-item__title")}>{category.name}</a>
							</div>
						))}
							
					</Slider> 
				</div>:
				<div className={cx("inner")}>
					<Slider {...settingsInCollection} className="px-[20px] ">
					{categoryList.map((category) =>  (
						<div key={category.id} className={cx("category-item", "style-2")}>
							<div className={cx("image")}>
								<img src={category.image} alt="" className="rounded-[50%] cursor-pointer"/>
							</div>
							<a href="/" className={cx("category-item__title")}>{category.name}</a>
						</div>
					))}
					
				</Slider>
				</div>
			}
		</div>
	)
}

export default CategoriesSlider;

