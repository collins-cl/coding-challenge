import React, { useContext } from "react";
import { MyContext } from "../../Context/PlayContext";
import "../NewReleases/NewReleases.css";
import ReleaseDummy from "../ReleaseDummyData";

const NewReleases = () => {
  const Release = ReleaseDummy;

  const { togglePlayMenu } = useContext(MyContext);

  return (
    <div className="newR">
      <div className="newR-head">New Releases.</div>

      <div className="wrapper">
        {Release.map((item) => (
          <div className="content" key={item.id}>
            <div
              className="img"
              style={{ cursor: "pointer" }}
              onClick={togglePlayMenu}
            >
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
