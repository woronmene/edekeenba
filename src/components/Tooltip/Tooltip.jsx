/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Tooltip.css";

function Tooltip({ children, title, TooltipState, setShowTooltip }) {
  //   console.log(TooltipState);
  const data = [
    {
      id: 1,
      title: "New Bid",
    },
    {
      id: 2,
      title: "$50,000",
    },
    {
      id: 3,
      title: "Lebron James",
    },
    {
      id: 4,
      title: "Bid Now",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setShowTooltip(false);

      setTimeout(() => {
        setIndex(0);
      }, 1500);
    }
  }, [index, data, setShowTooltip]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // if (TooltipState) {
  //   setTimeout(() => {
  //     setShowTooltip(false);
  //   }, 3000);
  // }

  return (
    <div
      className={TooltipState ? `tooltip showTooltip` : "tooltip"}
      data-tool-tip={title}
    >
      {data.map((data, dataIndex) => {
        let position = "next";
        if (dataIndex === index) {
          position = "current";
        }
        if (
          dataIndex === index - 1 ||
          (index === 0 && dataIndex === data.length - 1)
        ) {
          position = "prev";
        }

        return <p className={position}>{data.title}</p>;
      })}

      {/* <p className="next">New Bid</p>
      <p className="current">Next Bid</p>
      <p className="current">jara Bid</p> */}
    </div>
  );
}

export default Tooltip;
