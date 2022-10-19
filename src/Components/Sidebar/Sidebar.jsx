import "../Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdPerson } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import { RiRadio2Fill } from "react-icons/ri";
import { AiTwotoneVideoCamera } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = ({ open }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-w">
        <div className={open ? "navlinks-active" : "navlinks"}>
          <div className="links">
            <NavLink to="/">
              <MdHomeFilled className="icon" />
              <p>Home</p>
            </NavLink>

            <NavLink to="collections">
              <SiApplemusic className="icon" />
              <p>Music</p>
            </NavLink>

            <NavLink to="radio">
              <RiRadio2Fill className="icon" />
              <p>Radio</p>
            </NavLink>

            <NavLink to="video">
              <AiTwotoneVideoCamera className="icon" />
              <p>Video</p>
            </NavLink>
          </div>

          <div className="actions">
            <NavLink to="profile">
              <MdPerson className="icon" />
              <p>Profile</p>
            </NavLink>

            <NavLink to="logout">
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
