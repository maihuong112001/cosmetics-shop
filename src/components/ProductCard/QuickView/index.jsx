import classNames from "classnames/bind";
import styles from "./QuickView.module.scss";
import { Modal, Rate } from "antd";
import { PlusOutlined, MinusOutlined} from "@ant-design/icons";
import Slider from "react-slick";
import { quickView } from "@/services/settings.service";
import { ReactComponent as InStock } from "@/assets/images/Products/in-stock.svg";
import { ReactComponent as OutOfStock } from "@/assets/images/Products/out-of-stock.svg";
import CountdownTimer from "../CountdownTimer";

const cx = classNames.bind(styles);

function QuickView(props) {
	return (
	     <Modal 
			centered 
			footer={[null]}
			style={{maxWidth: '900px', width: '100%'}}
			width="100%"
			open={props.isQuickViewOpen}
			onCancel={props.handleCancel} >
			<div className={cx("quick-view")}>
				<div className={cx("image")}>
					<Slider {...quickView}>
					{
						props.images.map((image) => (
							<img src={image.image} alt=""/>
						))
					}
					</Slider>
				</div>
				<div className={cx("info")}>
					<div className={cx("ratting")}>
						<Rate disabled defaultValue={5} style={{ fontSize: "12px" }} />
					</div>
					<div className={cx("name")}>
						<a href="/">{props.name}</a>
					</div>
					<div className={cx("brand")}>
						<span className="" >By</span>
						<a href="/">{props.brand}</a>
					</div>
					<div className="flex gap-2 items-center">
						<div className={cx("price")}>
							<span>{props.price}</span>
						</div>
						{props.preOrder ? (
							<div className="text-green-color">( Pre-Order ) </div>
						) : null}
					</div>
					<div className={cx("description")}>
						<span>{props.description}</span>
					</div>
					{
						(props.discount > 0) ? 
						<CountdownTimer />
						:
						''
						
          				}
					{(props.color.length > 0) ? 
					<div className={cx("variants")}>
						<label>color: chestnut</label>
						<div className="flex gap-2">

							{props.color.map(color => (
								<div className={cx("color")} style={{backgroundColor: color.color}}></div>
							))}
						</div>
					</div>
					:'' }
					{
						props.quantity > 0 ?
							<div className={cx("available")}>
								<div className={cx("icon")}>
									<InStock/>
								</div>
								<p className="text-green-color">In Stock</p>
							</div>
						:
							<div className={cx("available")}>
								<div className={cx("icon")}>
									<OutOfStock/>
								</div>
								<p className="text-red-color">Out Of Stock</p>
							</div>
					}
					<div className="h-[50px]  flex items-center">
						<div className={cx("quantity")}>
							<div className={cx("qty-btn")} onClick={props.decreaseQuantityCart}>
								<MinusOutlined
									style={{ fontSize: "18px", color: "#fff" }}
									className={cx("gsx")}
								/>
							</div>
							<input
								className="bg-transparent w-[30px] leading-[40px] text-center w-[56px] text-[1.8rem] text-black"
								value={props.quantityCart}
								readOnly
								pattern="[0-9]"
							></input>
							<div className={cx("qty-btn")} onClick={props.increaseQuantityCart}>
								<PlusOutlined style={{ fontSize: "18px", color: "#fff" }} />
							</div>
						</div>
						<button className={cx("cart-btn")}>
							<span>ADD TO CART</span>
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default QuickView;
