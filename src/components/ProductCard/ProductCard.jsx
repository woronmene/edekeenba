import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, img }) {
  // const type = "category";

  return (
    <div
      className="playerCard"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="badge">
        <div className="badgeWrapper">
          <div className="right">
            <p className="productName">
              {/* {type === "pinned"
                ? "Pinned"
                : type === "category"
                ? "category"
                : ""} */}
              {name}
            </p>
            {/* {type === "pinned" ? (
              <span className={stockCount}> 300 items in stock</span>
            ) : (
              ""
            )} */}
            <p className="position">{price}</p>
          </div>
          <div className="left">
            <div className="buyButton">Buy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
