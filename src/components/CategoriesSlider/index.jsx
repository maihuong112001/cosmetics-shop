import React from 'react';
import classNames from "classnames/bind";
import Slider from 'react-slick';
import { categoriesService } from '@/services/categories.service';
import { settings } from "@/services/settings.service";
import styles from "./CategoriesSlider.module.scss"

const cx = classNames.bind(styles);

function CategoriesSlider() {
					const categoryList = categoriesService.getAllCategory();
	
	return (
		<div>
			<Slider {...settings} className="px-[20px] ">
					{categoryList.map((category) =>  (
						<div key={category.id} className={cx("category-item")}>
							<div className="rounded-[50%] overflow-hidden">
								<img src={category.image} alt="" className="rounded-[50%] cursor-pointer"/>
							</div>
							<a href="/" className={cx("category-item__title")}>{category.name}</a>
						</div>
					))}
					
				</Slider>
		</div>
	)
}

export default CategoriesSlider;

