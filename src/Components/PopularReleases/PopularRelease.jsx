import React from "react";
import ReleaseDummy from "../ReleaseDummyData";

const PopularRelease = () => {
  const Release = ReleaseDummy;

  return (
    <div className="newR">
      <div className="newR-head">Popular in your area.</div>

      <div className="wrapper">
        {Release.map((item) => (
          <div className="content" key={item.id}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="title">{item.title}</div>
            <div className="artist">{item.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRelease;
