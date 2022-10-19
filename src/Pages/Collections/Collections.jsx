import React, { useState } from "react";
import "../Collections/Collections.css";
import { FaPlay } from "react-icons/fa";
import CollectionDummy from "../../Components/CollectionsDummy";

const Collections = () => {
  const [options, setOptions] = useState(false);

  const toggleOptions = () => {
    setOptions(false);
  };

  const toggleOptionsLike = () => {
    setOptions(true);
  };
  const datas = CollectionDummy;

  return (
    <div className="collections">
      <div className="collections-wrapper">
        <div className="options">
          <div
            className={!options ? "active" : "inactive"}
            onClick={toggleOptions}
          >
            My Collections
          </div>
          <div
            className={!options ? "inactive" : "active"}
            onClick={toggleOptionsLike}
          >
            Likes
          </div>
        </div>

        {!options ? (
          <div className="my-collections">
            {datas.map((item) => (
              <div className="cont" key={item.id}>
                <img src={item.img} alt="" className="card-image" />
                <div className="card-info">
                  <div className="details">
                    <div className="head">{item.title}</div>
                    <div className="artist">{item.artist}</div>
                    <div className="likes-count">{item.likes} likes</div>
                  </div>

                  <div className="play-collections">
                    <FaPlay className="play-c" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="liked-items">No item liked yet</div>
        )}
      </div>
    </div>
  );
};

export default Collections;
