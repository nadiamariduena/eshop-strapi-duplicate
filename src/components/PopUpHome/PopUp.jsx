import React, { useState } from "react";
import "./popUp.scss";
import { IoClose } from "react-icons/io5";

const PopUp = () => {
  const [closePop, setClosePop] = useState(true);

  //
  return (
    <>
      {closePop ? (
        <div className="wrapper-popup">
          <div className="container-popup">
            <span
              onClick={(e) => (e.preventDefault(), setClosePop(!closePop))}
              className="icon-close-popup"
            >
              <IoClose />
            </span>
            <p>Kookaii Club</p>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>

            <span className="discover">
              DISCOVER THE NEWS & OUR EXCLUSIVE OFFERS
            </span>
            <input type="text" placeholder="e-mail" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PopUp;
