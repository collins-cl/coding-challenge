import React, { useContext, useState } from "react";
import "../PlayMenu/PlayMenu.css";
import PlayerImage from "../../Assets/Rectangle25.png";
import { BsShuffle, BsPlay } from "react-icons/bs";
import {
  MdSkipNext,
  MdSkipPrevious,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import { IoMdVolumeHigh } from "react-icons/io";
import { MyContext } from "../../Context/PlayContext";

const PlayMenu = () => {
  const { playmenu } = useContext(MyContext);

  const [play, setPlay] = useState(false);

  const togglePlay = () => {
    setPlay(!play);
  };

  return (
    <>
      {playmenu ? (
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

                <div className="play" onClick={togglePlay}>
                  {play ? (
                    <MdPause className="play-button" />
                  ) : (
                    <MdPlayArrow className="play-button" />
                  )}
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
              <IoMdVolumeHigh className="volume" />
              <input type="range" name="" className="volume-progress" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlayMenu;
