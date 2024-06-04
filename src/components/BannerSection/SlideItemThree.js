import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItemThree = ({ slide = {} }, ref) => {
  const { title, text } = slide;

  return (
    <div style={{ userSelect: "none" }} ref={ref} className="slide-item">
      <div className="round-shape-1"></div>
      <div className="round-image">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`../../../public/paraguay.png`).default.src
            })`,
          }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h1 className="text-white">
                <TextSplit text={title} />
              </h1>
              <div className="text text-white">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemThree);
