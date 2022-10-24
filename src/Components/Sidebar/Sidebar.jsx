import "../Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdPerson } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { RiRadio2Fill } from "react-icons/ri";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ open, handleClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-w">
        <div className={open ? "navlinks-active" : "navlinks"}>
          <div className="links">
            <NavLink to="/"  onClick={handleClick}>
              <MdHomeFilled className="icon" />
              <p>Home</p>
            </NavLink>

            <NavLink to="collections" onClick={handleClick}>
              <SiApplemusic className="icon" />
              <p>Music</p>
            </NavLink>

            <NavLink to="radio" onClick={handleClick}>
              <RiRadio2Fill className="icon" />
              <p>Radio</p>
            </NavLink>

            <NavLink to="video" onClick={handleClick}>
              <AiTwotoneVideoCamera className="icon" />
              <p>Video</p>
            </NavLink>
          </div>

          <div className="actions" onClick={handleClick}>
            <NavLink to="profile">
              <MdPerson className="icon" />
              <p>Profile</p>
            </NavLink>

            <NavLink to="logout" onClick={handleClick}>
              <IoIosLogOut className="icon" />
              <p>Logout</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
