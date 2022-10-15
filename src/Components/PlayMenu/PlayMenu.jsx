import React from "react";
import "../PlayMenu/PlayMenu.css";
import PlayerImage from "../../Assets/Rectangle25.png";
import { BsShuffle, BsPlay, BsFOr } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious, MdPause } from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";

const PlayMenu = () => {
  return (
    <div className="playmenu">
      <div className="playmenu-wrapper">
        <div className="cont-1">
          <div className="img">
            <img src={PlayerImage} alt="" />
          </div>
          <div className="details">
            <div className="song">Seasons in</div>
            <div className="artist">James</div>
          </div>
        </div>
        <div className="cont-2">
          <div className="controls">
            <div className="shuffle">
              <BsShuffle />
            </div>

            <div className="previous">
              <MdSkipPrevious />
            </div>

            <div className="play">
              <BsPlay className="play-button" />
            </div>

            <div className="next">
              <MdSkipNext />
            </div>

            <div className="repeat">
              <TbRepeat />
            </div>
          </div>

          <div className="playprogress">
            <div className="progress"></div>
          </div>
        </div>
        <div className="cont-3">
          <div className="volume">
            <IoMdVolumeHigh />
          </div>

          <div className="volume-progress">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayMenu;
