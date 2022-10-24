import React, { useState, createContext } from "react";

export const MyContext = createContext();

export default function PlayContext(props) {
  const [playmenu, setPlayMenu] = useState(false);

  const togglePlayMenu = () => {
    setPlayMenu(!playmenu);
  };
  return (
    <MyContext.Provider value={{ playmenu, togglePlayMenu }}>
      {props.children}
    </MyContext.Provider>
  );
}
