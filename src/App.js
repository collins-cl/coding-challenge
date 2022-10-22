import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import hamOpen from "./Assets/menu1.png";
import PlayMenu from "./Components/PlayMenu/PlayMenu";
import Chart from "./Pages/Chart/Chart";
import Collections from "./Pages/Collections/Collections";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose=()=>{
    setOpen(false)
  }

  const hamburgerOpen = (
    <img src={hamOpen} alt="" onClick={handleClick} className="hamburger" />
  );
  const hamburgerClose = (
    <FaTimes
      style={{ fontSize: "25px", fontWeight: "lighter" }}
      onClick={handleClick}
      className="hamburger"
    />
  );

  return (
    <Router>
      <Topbar
        open={open}
        hamburgerClose={hamburgerClose}
        hamburgerOpen={hamburgerOpen}
      />

      <div className="App">
        <Sidebar open={open} handleClose={handleClose} />
        <div className="otherside">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/topchart/:id" element={<Chart />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </div>
      </div>

      <div className="bottom-bar">
        <PlayMenu />
      </div>
    </Router>
  );
}

export default App;
