import React, { useState } from "react";
import data from "./data.json";
import tatamg from "./tatamg.json";
// import CartButton from './CartButton'
import "./GDetails.css";
const ProductDetails = () => {
  // console.log(data)
  const [count, setCount] = useState(0);

  // const counter =()=>{
  //     setCount(count+1);
  // }
  return (
    <div>
      {/* <h1 className="mini">Groceries</h1> */}
      <div className="sunny">
        <p className="topdeal">Top Sellers From Healthvit</p>
      </div>
      <div className="maincontainer">
        <div className="container">
          {/* map through the data and display the cards */}
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.imgURL} alt={item.name} />
              </div>
              <div className="card-title">{item.title}</div>
              <div className="card-info">{item.info}</div>
              <div className="card-rating">
                <span>
                  4.2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="15"
                    viewBox="0 0 51 48"
                  >
                    <path
                      fill="#ffffff"
                      stroke="none"
                      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                    ></path>
                  </svg>
                </span>
                <span>{item.rating}</span>
              </div>
              <div className="price">
                <div className="card-mrp">
                  <span>MRP</span>
                  <span>{item.mrp}</span>
                  <span className="card-discount">{item.discount}</span>
                </div>
                <div className="card-price">
                  <span>{item.sellingPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
