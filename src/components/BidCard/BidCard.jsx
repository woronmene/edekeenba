import React from "react";
import "./BidCard.css";

function BidCard({ name, price, img, playerName }) {
  return (
    <div className="bidCard">
      <div className="left">
        <div
          className="img"
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <div className="title">{name}</div>
          <div className="desc">{playerName}</div>
        </div>
      </div>

      <div className="right">
        <div className="price">{`$${price}`}</div>
        <div className="currentBid">Current bid</div>
        <div className="bidButton">Place Bid</div>
      </div>
    </div>
  );
}

export default BidCard;
