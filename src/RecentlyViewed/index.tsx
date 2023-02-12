import React from "react";
import "./RecentlyViewed.css";
import { BsChevronRight } from "react-icons/bs";

const data = [
  {
    name: "Metrics: Days Payable Outstanding",
    info1: "CY: 32.2 days",
    info2: "PY: 36.2days",
  },
  {
    name: "Metrics: Days Payable Outstanding",
    info1: "CY: 32.2 days",
    info2: "PY: 36.2days",
  },
  {
    name: "Metrics: Days Payable Outstanding",
    info1: "CY: 32.2 days",
    info2: "PY: 36.2days",
  },
  {
    name: "Metrics: Days Payable Outstanding",
    info1: "CY: 32.2 days",
    info2: "PY: 36.2days",
  },
  {
    name: "Metrics: Days Payable Outstanding",
    info1: "CY: 32.2 days",
    info2: "PY: 36.2days",
  },
];
const RecentlyViewed = () => {
  return (
    <div className="recently comp_wrapper">
      <div className="">
        <div className="comp_head">Recently Viewed</div>

        <div className="recently_content">
          {data.map((item, id) => {
            return (
              <div className="recently_content_stats" key={id}>
                <div className="recently_content_text">
                  <div>{item.name}</div>
                  <div>
                    {item.info1},{item.info2}
                  </div>
                </div>
                <div className="recently_content_btn">
                  <BsChevronRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
