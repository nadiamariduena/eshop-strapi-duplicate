import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
// ** framer
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
//
//  AiOutlineHeart
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

//MdKeyboardArrowDown
import { MdKeyboardArrowDown } from "react-icons/md";
// MdKeyboardArrowUp
import { MdKeyboardArrowUp } from "react-icons/md";
import MarqueeAnimation from "./Marquee-animation";

//https://react-icons.github.io/react-icons/search?q=arrow
//
//
import CartPopUp from "../CartPopUp/CartPopUp";
import FaviCart from "../Favi/Favi";

const Navbar = () => {
  //
  //
  const [openPopUpCart, setOpenPopUpCart] = useState(false);
  const [openFavi, setOpenFavi] = useState(false);

  // to update the items inside the small basket icon
  const favorites = useSelector((statee) => statee.cartfav.products);
  const products = useSelector((state) => state.cart.products);

  //
  return (
    <>
      <div className="navbar">
        <MarqueeAnimation />
        <div className="wrapper">
          <div className="left">
            {/* Item flag */}
            <div className="item">
              <img src="img/en.png" alt="" />
              <MdKeyboardArrowDown />
            </div>
            {/* dollar */}
            <div className="item">
              <span>USD</span>
              <MdKeyboardArrowDown />
            </div>
            {/* categories */}
            <div className="item">
              <Link className="link" to="/products/3">
                Women
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/4">
                Men
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/5">
                Children
              </Link>
            </div>
          </div>
          {/*

        CENTER

         */}
          <div className="center">
            <Link className="logo" to="/">
              Kookaii
            </Link>
          </div>

          {/*

        RIGHT

         */}
          <div className="right">
            <div className="item">
              <Link className="link" to="/">
                About
              </Link>
            </div>

            <div className="item">
              <Link className="link" to="/">
                Contact
              </Link>
            </div>

            <div className="item">
              <Link className="link" to="/">
                Storess
              </Link>
            </div>
            {/*

          icons

          */}
            <div className="icons">
              <CiSearch />
              <Link className="link" to="/">
                <AiOutlineUser />
              </Link>

              {favorites.length >= 1 ? (
                <div
                  className="cartIcon"
                  // onClick={(e) => (e.preventDefault(), setOpenFavi(!openFavi))}
                >
                  <Link className="link" to="/favoritesss">
                    <AiOutlineHeart />
                    <span>{favorites.length}</span>{" "}
                  </Link>
                </div>
              ) : (
                <>
                  <Link className="link">
                    <AiOutlineHeart />
                  </Link>
                </>
              )}

              {/* CART */}

              {products.length >= 1 ? (
                <div
                  className="cartIcon"
                  onClick={(e) => (
                    e.preventDefault(), setOpenPopUpCart(!openPopUpCart)
                  )}
                >
                  <HiOutlineShoppingCart />
                  <span>{products.length}</span>
                </div>
              ) : (
                <>
                  <HiOutlineShoppingCart />
                </>
              )}
            </div>
          </div>
        </div>
        {/* CART POPup  openFavi, setOpenFavi*/}
        <AnimatePresence>{openPopUpCart && <CartPopUp />}</AnimatePresence>
        {/* <AnimatePresence>{openFavi && <FaviCart />}</AnimatePresence> */}
      </div>
    </>
  );
};

export default Navbar;
