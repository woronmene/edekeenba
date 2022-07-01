import React from "react";
import "./PlayerCard.css";

function PlayerCard({ name, position, logo, img }) {
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
            <p className="position">{position}</p>
          </div>
          <div className="left">
            <img src={logo} alt="" className="boostIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
