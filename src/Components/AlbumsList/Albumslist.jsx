import React from "react";
import "../AlbumsList/Albumslist.css";
import { IoMdHeartEmpty, IoMdMore } from "react-icons/io";
import AlbumsList from "../AlbumListDummy";

const Albumslist = () => {
  const data = AlbumsList;

  return (
    <div className="albumlist">
      {data.map((item) => (
        <div className="a-wrapper" key={item.id}>
          <div className="img-cont">
            <img src={item.img} alt="" />
            <IoMdHeartEmpty className="like-button" />
          </div>

          <div className="title-type">
            <div className="title">
              {item.title} - {item.artist}
            </div>
            <div className="type">{item.type}</div>
          </div>

          <div className="duration-options">
            <div className="duration">{item.duration}</div>
            <div className="options">
              <IoMdMore />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Albumslist;
