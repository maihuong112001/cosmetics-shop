import { useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import { NumericFormat } from "react-number-format";
import { ReactComponent as CompareIcon } from "@/assets/images/Products/down-up-arrow-svgrepo-com.svg";
import { ReactComponent as SearchIcon } from "@/assets/images/Products/search-svgrepo-com.svg";
import { ReactComponent as ShoppingBag } from "@/assets/images/Products/bag-2-svgrepo-com.svg";
import { ReactComponent as Delete } from "@/assets/images/Products/trash-2-svgrepo-com.svg";
import { NormalButton } from "../Button";
import {
  HeartOutlined,
  ShoppingOutlined,
  PlusOutlined,
  MinusOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Rate, Tooltip } from "antd";
import Compare from "./Compare";
import { AddWishlist, RemoveWishlist } from "@/store/slices/wishlist.slice";
import { setCart } from "@/store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import supabase from "@/services/supabase";
import { fetchCartData } from "@/services/supabase/resource/cart.service";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
import { addCompare, removeCompare } from "@/store/slices/compare.slice";
import QuickView from "./QuickView";
import CountdownTimer from "./CountdownTimer";

const cx = classNames.bind(styles);
function ProductCard(product) {

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [quantityCart, setQuantityCart] = useState(1);
  const carts = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.user);
  const increaseQuantityCart = () => {
    setQuantityCart(quantityCart + 1);
  };
  const decreaseQuantityCart = () => {
    if (quantityCart > 1) {
      setQuantityCart(quantityCart - 1);
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
        navigate("/login");
        // throw new Error(error.message);
      } else {
        dispatch(setCart(await fetchCartData(user)));
      }
    } catch (error) {
      alert(error);
    }
  }, [carts.items, dispatch, navigate, product.id, user]);

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
          {
            (product.discount > 0) ? 
            <CountdownTimer inCard/>
            :
            ''
            
          }
          
          <Compare 
            isCompareOpen={isCompareOpen}
            cancelCompare={cancelCompare}
            removeCompare={() => dispatch(removeCompare(product))}/>
          <QuickView
            isQuickViewOpen={isQuickViewOpen}
            handleCancel={handleCancel}
            increaseQuantityCart={increaseQuantityCart}
            decreaseQuantityCart={decreaseQuantityCart}
            quantityCart={quantityCart}
            images={product.images} 
            name={product.name} 
            discount={product.discount}
            id={product.id} 
            price={product.price} 
            preOrder={product.preOrder}
						brand={product.brand}
            description={product.description}
            quantity={product.quantity}
            color={product.color}
            key={product.id} 
          />
          <div className={cartForm}>
            <form>
              <div className="border-r-[1px] border-r-[rgba(255,255,255,.5)] flex px-[20px] items-center">
                <div className={cx("qty-btn")} onClick={decreaseQuantityCart}>
                  <MinusOutlined
                    style={{ fontSize: "12px", color: "#fff" }}
                    className={cx("gsx")}
                  />
                </div>
                <input
                  className="bg-transparent w-[30px] leading-[40px]"
                  value={quantityCart}
                  readOnly
                  pattern="[0-9]"
                ></input>
                <div className={cx("qty-btn")} onClick={increaseQuantityCart}>
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
              <NumericFormat thousandSeparator="," value={product.price} suffix='₫' displayType="text" customInput="span" renderText={(value, props) => <span {...props}>{value}</span>} ></NumericFormat>
              </div>
              {product.preOrder ? (
                <div className="text-green-color">( Pre-Order ) </div>
              ) : null}
            </div>
            <div className="flex gap-4">
              {
                product.color.map(color => (
                  <div className={cx("color")} key={color.id} style={{backgroundColor: color.color}}></div>
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
              <NumericFormat thousandSeparator="," value={product.price} suffix='₫' displayType="text" customInput="span" renderText={(value, props) => <span {...props}>{value}</span>} ></NumericFormat>
            </div>
            {product.preOrder ? (
              <div className="text-green-color">( Pre-Order ) </div>
            ) : null}
          </div>
          
          <div className={cx("description")}>
            <span>{product.description}</span>
          </div>
          <div className="flex gap-4 mt-2">
              {
                product.color.map(color => (
                  <div className={cx("color")} key={color.id} style={{backgroundColor: color.color}}></div>
                ))
              }
            </div>
        </div>
          }
    </div>
  );
}

export default ProductCard;
