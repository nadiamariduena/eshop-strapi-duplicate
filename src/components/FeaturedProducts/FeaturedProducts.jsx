import React from "react";

import "./featuredProducts.scss";
// Axios call from the useFetch
import useFetch from "../../Hooks/UseFetch";
//
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  //
  //
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        {" "}
        {/* <span className="title-year-collection">SHOP</span> */}
        {/* <h1>Most Viewed</h1> */}
        {/* <h1>{type} products</h1> */}
        <div className="headlines-featuredProducts">
          <h2>AW-23</h2>
        </div>
      </div>
      <div className="bottom">
        {/* {loading ? "loading" : data.map((item) => <Card item={item} />)} */}
        {/*



         {data.map((item) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))} */}

        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
