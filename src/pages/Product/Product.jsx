import React, { useRef, useState, useEffect } from "react";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useGesture } from "react-use-gesture";
//

import useFetch from "../../Hooks/UseFetch";

//
// ** icons
import { FaBalanceScaleRight } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import svgImg from "../../media/expand-svgrepo-com.svg";
import "./individualProduct.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import { addToCart } from "../../redux/cartReducer";
import { addToFav } from "../../redux/favRedux";

// //
//
const Product = ({ product }) => {
  //
  const id = useParams().id;
  // const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  // this data, is passing the data from strapi, you will use this data inside the handleAddToCart, like so: data.id
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  //

  // const handleAddToFavorites = (data) => {
  //   dispatch(addToFav(data));
  // };
  const handleAddToFavorites = () => {
    const favorite = {
      id: data.id,
      title: data.attributes.title,
      desc: data.attributes.desc,
      price: data.attributes.price,
      img: data.attributes.img.data.attributes.url,
    };
    dispatch(addToFav(favorite));
  };
  //
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // -------------------------
  //
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images-container">
              <div className="img-box">
                <img
                  src={
                    process.env.REACT_APP_UPLOADMEDIA_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => (e.preventDefault, setSelectedImg("img"))}
                />
              </div>

              <div className="img-box">
                <img
                  src={
                    process.env.REACT_APP_UPLOADMEDIA_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => (e.preventDefault, setSelectedImg("img2"))}
                />
              </div>
            </div>

            <motion.div className="mainImg">
              <motion.div className="containerImgMain-svgCursor">
                {/* <img id="svgg" src={svgImg} alt="" /> */}

                <motion.img
                  drag
                  dragDirectionLock
                  dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  dragElastic={0.5}
                  whileTap={{ cursor: "grabbing" }}
                  //
                  src={
                    process.env.REACT_APP_UPLOADMEDIA_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                  //
                />
              </motion.div>
            </motion.div>
          </div>
          {/*



       */}
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <h2 className="price">
              <span className="vat-included">${data?.attributes?.price}</span>
            </h2>
            <p>{data?.attributes?.desc}</p>
            {/* <div className="quantity">
              <button onClick={handleDecrease}>-</button>
              {quantity}
              <button onClick={handleIncrease}>+</button> */}
            {/* </div> */}

            <button
              className="add-btn"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <MdOutlineAddShoppingCart /> ADD TO CART
            </button>
            {/*


                            WISHLIST

             */}
            <div className="links">
              <div className="item">
                <button
                  className="btn-addToFav-compare"
                  style={{ pointerEvents: "all" }}
                  onClick={handleAddToFavorites}
                >
                  <AiOutlineHeart className="icon-btn-indiv-product" /> ADD TO
                  WISH LIST
                </button>
              </div>

              <div className="item">
                <button className="btn-addToFav-compare">
                  <FaBalanceScaleRight className="icon-btn-indiv-product" /> ADD
                  TO COMPARE
                </button>
              </div>
            </div>

            {/*  */}
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
