import React from "react";
import "./cartPopUp.scss";
import { motion } from "framer-motion";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  removeItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../MakeRequest";
import { loadStripe } from "@stripe/stripe-js";

//

//

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY_CLIENT
);

//
//
//
const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  //
  const dispatch = useDispatch();

  const cartTotal = products.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });

      //
      //  if you add the dispatch resetCart()  outside the "try" or if you position it above the await, the cart will be cleared, but if you add the dispatch resetCart() under the "await" line, the cart is not going to be cleared after the purchase
      //
      dispatch(resetCart());

      //
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

      //
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="cart-Popup-product"
      //
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.15,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: "easeIn",
          duration: 0.15,
        },
      }}
    >
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className="item-cart-Popup-product" key={item.id}>
          <div className="imgBox-cart-Popup-product">
            <img
              src={process.env.REACT_APP_UPLOADMEDIA_URL + item.img}
              alt={item.title}
            />
          </div>
          <div className="details">
            <h1>{item.title}</h1>
            {/* <p>{item.desc?.substring(0, 100)}</p> */}
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          {/*

          DELETE

          */}
          <MdOutlineRemoveShoppingCart
            className="delete-cart-Popup-product"
            style={{ pointerEvents: "all" }}
            onClick={() => dispatch(removeItem(item.id))}
          />
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${cartTotal}</span>
      </div>
      <button className="checkout-PopUp" onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </motion.div>
  );
};

export default Cart;
