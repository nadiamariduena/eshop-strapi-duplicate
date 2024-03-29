import React, { useState } from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
//
import useFetch from "../../Hooks/UseFetch";
//
import List from "../../components/List/List";

import "./products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  // ** STATES range bar
  const [maxPrice, setMaxPrice] = useState(1000);
  // ** STATES sort btns
  const [sort, setSort] = useState(null);
  //
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  //
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  console.log(data);

  //
  //
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  //
  console.log(selectedSubCats);
  //
  return (
    <div className="products">
      <div className="left">
        {/*


radio BUttons

 */}

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>{" "}
        </div>
        {/*
        -------- CHECKBOX ---------

      */}
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        {/*
      --------  RANGE BAR ---------
        */}
        <div className="filterItem">
          <h2>Filter by price</h2>
          {/* range bar*/}
          <div className="inputItem">
            <span>0</span>
            <input
              id="myInput"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="hero-catProductsPage">
          <div className="hero-catProductsPage-box">
            <img
              // className="catImg"
              src="img.jpg"
              alt=""
            />
          </div>
        </div>

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
