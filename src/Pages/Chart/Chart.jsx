import React from "react";
import "../Chart/Chart.css";
import LeadImage from "../../Assets/Lead-image.svg";
import PlayAll from "../../Assets/playall.png";
import Collection from "../../Assets/collection.png";
import LikeAll from "../../Assets/love-button.png";

const Chart = () => {
  return (
    <div className="chart">
      <div
        className="chass"
        style={{
          background: `url(${LeadImage})`,
          width: "100vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: "-999",
          position: "fixed",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          filter: "brightness(.15)",
        }}
      ></div>

      <div className="chart-container">
        <div className="chart-wrapper">
          <div className="c-wrapper-one">
            <img src={LeadImage} alt="" />
          </div>
          <div className="c-wrapper-two">
            <div className="info">
              <div className="head">Tomorrow’s tunes</div>
              <div className="details">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae delectus laborum unde maxime totam minus quibusdam.
              </div>
              <div className="duration">
                <div className="total-songs">64 Songs</div> <div>-</div>
                <div className="time">16 hours+</div>
              </div>
            </div>

            <div className="chart-actions">
              <div className="play-all">
                <img src={PlayAll} alt="" />
                <p>Play all</p>
              </div>
              <div className="add-collection">
                <img src={Collection} alt="" />
                <p>Add to collection</p>
              </div>
              <div className="like-all">
                <img src={LikeAll} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
