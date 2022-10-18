import React from "react";
import "../TopCharts/TopCharts.css";
import LikeButton from "../../Assets/Heart.png";
import ChartsDummyText from "../ChartsDummy";
import { Link } from "react-router-dom";

const TopCharts = () => {
  const Topchart = ChartsDummyText;

  return (
    <div className="topcharts">
      <div className="head">Top Charts</div>

      <div className="c-t-box">
        {Topchart.map((chart, id) => (
          <div className="item" key={chart.id}>
            <div className="pic-desc">
              <img src={chart.img} alt="" />

              <div className="desc">
                <div className="title">
                  <Link to={`/topchart/${chart.id}`}>{chart.title}</Link>
                </div>
                <div className="artist">{chart.artist}</div>
                <div className="duration">{chart.duration}</div>
              </div>
            </div>

            <div className="like-button">
              <img src={LikeButton} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
