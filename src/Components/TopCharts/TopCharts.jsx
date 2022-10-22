import React from "react";
import "../TopCharts/TopCharts.css";
import LikeButton from "../../Assets/Heart.png";
import ChartsDummyText from "../ChartsDummy";
import { Link, useNavigate } from "react-router-dom";

const TopCharts = () => {
  const Topchart = ChartsDummyText;
  const navigate = useNavigate();

  return (
    <div className="topcharts">
      <div className="head">Top Charts</div>

      <div className="c-t-box">
        {Topchart.map((chart, id) => (
          <div className="item" key={chart.id}>
            <div className="pic-desc">
              <img
                src={chart.img}
                alt=""
                onClick={() => navigate(`/topchart/${chart.id}`)}
              />

              <div className="desc">
                <div
                  className="title"
                  onClick={() => navigate(`/topchart/${chart.id}`)}
                >
                  {chart.title}
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
