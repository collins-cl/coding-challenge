import "../Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../Assets/home.png";
import MusicIcon from "../../Assets/music.png";
import RadioIcon from "../../Assets/radio.png";
import VideosIcon from "../../Assets/videos.png";
import ProfileIcon from "../../Assets/profile.png";
import LogoutIcon from "../../Assets/logout.png";

const Sidebar = ({open}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-w">
        <div className={open ? "navlinks-active" : "navlinks"}>
          <div className="links">
            <NavLink to="home">
              <img style={{ opacity: 0.3 }} src={HomeIcon} alt="" />
              <p>Home</p>
            </NavLink>

            <NavLink to="music">
              <img src={MusicIcon} alt="" />
              <p>Music</p>
            </NavLink>

            <NavLink to="radio">
              <img
                style={{ background: "transparent" }}
                src={RadioIcon}
                alt=""
              />
              <p>Radio</p>
            </NavLink>

            <NavLink to="video">
              <img src={VideosIcon} alt="" />
              <p>Video</p>
            </NavLink>
          </div>

          <div className="actions">
            <NavLink to="profile">
              <img src={ProfileIcon} alt="" />
              <p>Profile</p>
            </NavLink>

            <NavLink to="logout">
              <img src={LogoutIcon} alt="" />
              <p>Logout</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
