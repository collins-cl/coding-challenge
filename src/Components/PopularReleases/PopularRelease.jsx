import React,{useContext} from "react";
import ReleaseDummy from "../ReleaseDummyData";
import { MyContext } from "../../Context/PlayContext";

const PopularRelease = () => {
  const Release = ReleaseDummy;
  const { togglePlayMenu } = useContext(MyContext);

  return (
    <div className="newR">
      <div className="newR-head">Popular in your area.</div>

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

export default PopularRelease;
