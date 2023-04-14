import React from "react";
import "./Favi.scss";
import { motion } from "framer-motion";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
//
import { removeItemFav } from "../../redux/favRedux";
import { useDispatch } from "react-redux";
//
//
const FaviCart = () => {
  //a

  //
  const dispatch = useDispatch();
  //
  const products = useSelector((ade) => ade.cartfav.products);
  //

  return (
    <motion.div
      className="favi-cart-container"
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
      {products.length >= 1 ? (
        <div className="favi-cart">
          {products.map((item) => (
            <div className="favi-item" key={item.id}>
              <AiOutlineHeart
                onClick={() => dispatch(removeItemFav(item.id))}
                className="icon-heart"
              />
              <Link to={`/product/${item.id}`}>
                <img
                  src={process.env.REACT_APP_UPLOADMEDIA_URL + item.img}
                  alt={item.title}
                />
              </Link>
              <div className="favi-details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <h2>${item.price}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="title-favorites">
            <h4>Your Favorite items</h4>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default FaviCart;
