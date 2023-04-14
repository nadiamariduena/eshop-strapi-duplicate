import React from "react";
import "./largeImgMiddle.scss";

import imgMiddleHome2 from "../../media/pexels-cottonbro-studio-9155714_.jpg";
import { Link } from "react-router-dom";

const imgMiddleHome =
  "https://images.pexels.com/photos/9155711/pexels-photo-9155711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

//
//
//

const LargeMiddleImg = () => {
  return (
    <div className="wrapper-large-middle-image">
      <div className="container-large-middle-image">
        <img
          className="mainImgLgHome"
          src={imgMiddleHome2}
          alt={imgMiddleHome2}
        />
        <img
          className="secondImgHome"
          src={imgMiddleHome}
          alt={imgMiddleHome}
        />
        {/* imgMiddleHome2 */}
      </div>{" "}
      {/* <Link className="btn-overlay-video" to="/products/1">
        <button className="btn-home-tt-nouveautes">NEW ARRIVALS</button>{" "}
      </Link> */}
    </div>
  );
};

export default LargeMiddleImg;
