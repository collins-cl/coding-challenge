import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import hamOpen from "./Assets/menu1.png";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

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
        <Sidebar open={open} />
        <div className="otherside">
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
