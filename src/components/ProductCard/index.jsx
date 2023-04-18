import { useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { ReactComponent as CompareIcon } from "@/assets/images/Products/down-up-arrow-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/Products/search-svgrepo-com.svg";
import { ReactComponent as ShoppingBag } from "@/assets/images/Products/bag-2-svgrepo-com.svg";
import { ReactComponent as Delete } from "@/assets/images/Products/trash-2-svgrepo-com.svg";
import { ReactComponent as InStock } from "@/assets/images/Products/in-stock.svg";
import { ReactComponent as OutOfStock } from "@/assets/images/Products/out-of-stock.svg";
import { NormalButton } from "../Button";
import {
  HeartOutlined,
  ShoppingOutlined,
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Rate, Tooltip, Modal, Row, Col } from "antd";
import Compare from "./Compare";
import { AddWishlist, RemoveWishlist } from "@/store/slices/wishlist.slice";
import { setCart } from "@/store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import supabase from "@/services/supabase";
import { quickView } from "@/services/settings.service";
import { fetchCartData } from "@/services/supabase/resource/cart.service";
import Slider from "react-slick";
import { addCompare, removeCompare } from "@/store/slices/compare.slice";

const cx = classNames.bind(styles);
function ProductCard(product) {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const carts = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.user);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const showQuickView = () => {
    setIsQuickViewOpen(true);
  };

  const handleCancel = () => {
    setIsQuickViewOpen(false);
  };

  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const showCompare = () => {
		setIsCompareOpen(true);
    dispatch(addCompare(product))
	};

   const cancelCompare = () => {
    setIsCompareOpen(false);
  };

  const image_1 = product.images.find(img => img.id === 1)
  const image_2 = product.images.find(img => img.id === 2)

  const handleAddCart = useCallback(async () => {
    // dispatch(addCart(product));
    try {
      const cartItems = carts.items.map((item) => ({
        product_id: item.product.id,
        quantity: item.quantity,
      }));
      const item = cartItems.find((item) => item.product_id === product.id);
      if (item) {
        item.quantity += 1;
      } else {
        cartItems.push({ product_id: product.id, quantity: 1 });
      }
      const {error } = await supabase
        .from("cart")
        .update({ items: cartItems })
        .eq("id_user", user?.id);
      if (error) {
        throw new Error(error.message);
      } else {
        dispatch(setCart(await fetchCartData(user)));
      }
    } catch (error) {
      alert(error);
    }
  }, [carts.items, dispatch, product.id, user]);

  const button = product.button ? cx("button") : cx("button-type2");
  const cartForm = product.qtyCart ? cx("cart-form") : cx("cart-form-type-2");
  const wishlist = product.onWishlistPage ? cx("btn-trash") : cx("btn-trash-2");
  const isRow = product.row ? cx("row") : cx("column");
  return (
    <div className={cx('wrapper', isRow)}>
        <div className={cx("image")}>
          
          <div className={cx("preloading-img")} style={{ paddingTop: "100%" }}>
            <img
              src={image_1.image}
              alt=""
              className={cx("img-visible")}
            />
          </div>
          <div className={cx("preloading-img")} style={{ paddingTop: "100%" }}>
            <img
              src={image_2.image}
              alt=""
              className={cx("img-hidden", "fade-in", "lazyloaded")}
            />
          </div>
          <div className={wishlist}>
            <NormalButton normal  onClick={() => dispatch(RemoveWishlist(product))}> 
              <Delete />
            </NormalButton>
          </div>
          <div className={button}>
            {product.isWishlist ? (
              <Tooltip placement="top" title="Remove Wishlist">
                <NormalButton wishlistAdded>
                  <HeartFilled style={{ color: "white", fontSize: '17px' }} onClick={() => dispatch(RemoveWishlist(product))}/>
                </NormalButton>
              </Tooltip>
            ) : (
              <Tooltip placement="top" title="Wishlist">
                <NormalButton
                  onClick={() => dispatch(AddWishlist(product))}
                  normal
                >
                  <HeartOutlined style={{fontSize: '17px'}} />
                </NormalButton>
              </Tooltip>
            )}
            <NormalButton normal>
              <ShoppingBag />
            </NormalButton>
            {
              product.isCompare ?
                <Tooltip placement="top" title="Compare">
                  <NormalButton compare_added onClick={() => dispatch(removeCompare(product))} >
                    <CompareIcon/>
                  </NormalButton>
                </Tooltip>
            :
                <Tooltip placement="top" title="Compare">
                  <NormalButton normal onClick={showCompare}>
                    <CompareIcon />
                  </NormalButton>
                </Tooltip>
              
                
            }
           

            <NormalButton normal onClick={showQuickView}>
              <SearchIcon />
            </NormalButton>
          </div>
          <Compare 
            isCompareOpen={isCompareOpen}
            cancelCompare={cancelCompare}
            removeCompare={() => dispatch(removeCompare(product))}/>
          <Modal 
            centered 
            footer={[null]}
            style={{maxWidth: '900px', width: '100%'}}
            width="100%"
            open={isQuickViewOpen}
            onCancel={handleCancel} >
              <div className={cx("quick-view")}>
                <div className={cx("image")}>
                  <Slider {...quickView}>
                    {
                      product.images.map((image) => (
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
                    <a href="/">{product.name}</a>
                  </div>
                  <div className={cx("brand")}>
                    <span className="" >By</span><a href="/">{product.brand}</a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className={cx("price")}>
                      <span>{product.price}</span>
                    </div>
                    {product.preOrder ? (
                      <div className="text-green-color">( Pre-Order ) </div>
                    ) : null}
                  </div>
                  <div className={cx("description")}>
                    <span>{product.description}</span>
                  </div>
                  {
                    product.quantity > 0 ?
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
                      <div className={cx("qty-btn")} onClick={decreaseQuantity}>
                        <MinusOutlined
                          style={{ fontSize: "18px", color: "#fff" }}
                          className={cx("gsx")}
                        />
                      </div>
                      <input
                        className="bg-transparent w-[30px] leading-[40px] text-center w-[56px] text-[1.8rem] text-black"
                        value={quantity}
                        readOnly
                        pattern="[0-9]"
                      ></input>
                      <div className={cx("qty-btn")} onClick={increaseQuantity}>
                        <PlusOutlined style={{ fontSize: "18px", color: "#fff" }} />
                      </div>
                    </div>
                    <div
                      className={cx("cart-btn") + " cursor-pointer"}
                      onClick={handleAddCart}>
                      ADD TO CART
                    </div>
                  </div>
                </div>
              </div>
          </Modal>
          <div className={cartForm}>
            <form>
              <div className="border-r-[1px] border-r-[rgba(255,255,255,.5)] flex px-[20px] items-center">
                <div className={cx("qty-btn")} onClick={decreaseQuantity}>
                  <MinusOutlined
                    style={{ fontSize: "12px", color: "#fff" }}
                    className={cx("gsx")}
                  />
                </div>
                <input
                  className="bg-transparent w-[30px] leading-[40px]"
                  value={quantity}
                  readOnly
                  pattern="[0-9]"
                ></input>
                <div className={cx("qty-btn")} onClick={increaseQuantity}>
                  <PlusOutlined style={{ fontSize: "12px", color: "#fff" }} />
                </div>
              </div>
              <div
                className={cx("cart-btn") + " cursor-pointer"}
                onClick={handleAddCart}
              >
                <ShoppingOutlined
                  style={{ fontSize: "20px", color: "#fff" }}
                  className={cx("icon")}
                />
              </div>
            </form>
          </div>
        </div>
        {product.row ? 
        <div className={cx("content")}>
          
            <div className={cx("ratting")}>
              <Rate disabled defaultValue={5} style={{ fontSize: "12px" }} />
            </div>
            <div className={cx("name")}>
              <a href="/">{product.name}</a>
            </div>
            <div className="flex justify-center gap-2">
              <div className={cx("price")}>
                <span>{product.price}</span>
              </div>
              {product.preOrder ? (
                <div className="text-green-color">( Pre-Order ) </div>
              ) : null}
            </div>
            <div className="flex gap-4">
              {
                product.color.map(color => (
                  <div className={cx("color")} style={{backgroundColor: color.color}}></div>
                ))
              }
            </div>
        </div>
        :
        <div className={cx("content")}>  
          <div className={cx("ratting")}>
            <Rate disabled defaultValue={5} style={{ fontSize: "12px" }} />
          </div>
          <div className={cx("name")}>
            <a href="/">{product.name}</a>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className={cx("price")}>
              <span>{product.price}</span>
            </div>
            {product.preOrder ? (
              <div className="text-green-color">( Pre-Order ) </div>
            ) : null}
          </div>
          
          <div className={cx("description")}>
            <span>{product.description}</span>
          </div>
        </div>
          }
    </div>
  );
}

export default ProductCard;
