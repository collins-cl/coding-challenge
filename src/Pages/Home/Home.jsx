import React from "react";
import "../Home/Home.css";
import Tilt from "../../Assets/Vector.svg";
import Person from "../../Assets/personphoto.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="hero-flex">
          <div className="h-f-one">
            <img src={Tilt} alt="" className="tilt-image" />
            <div className="h-f-one-wrapper">
              <div className="content">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
