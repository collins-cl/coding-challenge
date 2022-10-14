import React from "react";
import "../Home/Home.css";
import Tilt from "../../Assets/Vector.svg";
import Person from "../../Assets/personphoto.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="hero-container">
          <div className="hero-container-one">
            <div className="container">
              <div className="content">
                <img src={Tilt} alt="" className="tilt-image" />
                <div className="one">Currated playlist</div>

                <div className="two">
                  <div className="a">R & B Hits</div>

                  <div className="b">
                    All mine, Lie again, Petty call me everyday, Out of time, No
                    love, Bad habit, and so much more
                  </div>
                </div>
                <div className="three">bjcjbajkcbkckc</div>
              </div>
              <div className="img">
                <img src={Person} alt="" />
              </div>
            </div>

            <div className="container-two">
              <div className="head">Top Charts</div>

              <div className="c-t-box">
                <div className="pic-desc">
                  <img src="" alt="" />
                  <div className="desc">
                    <div className="title">Golden Ages of 80s</div>
                    <div className="artist">Sean Swadder</div>
                    <div className="duration">101:12:09</div>
                  </div>
                </div>

                <div className="like-button">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
