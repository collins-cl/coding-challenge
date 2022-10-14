import React from "react";
import "../NewReleases/NewReleases.css";
import ReleaseDummy from "../ReleaseDummyData";

const NewReleases = () => {
  const Release = ReleaseDummy;

  return (
    <div className="newR">
      <div className="newR-head">New Releases.</div>

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

export default NewReleases;
