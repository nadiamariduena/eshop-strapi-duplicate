import React from "react";
import "./list.scss";
//
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
//
import Card from "../Card/Card";

//
//
const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );
  /*
this line: &sort=price:${sort} causes an error


  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
*/
  //  and here we will map and for each item inside, we are going to create a new filter: .map((item) =>

  return (
    <div className="list">
      <h5>categories</h5>
      <h3>SS-23</h3>
      <div className="wrapper-product-list-bar">
        <div className="left-product-list-bar">
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
      </div>

      {/* if there is some data then show the content of the map */}
      <div className="cont-prodducts-list">
        {loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default List;
