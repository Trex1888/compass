import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Top.css";

const Top = ({ backgroundStyle }) => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const style = {
    ...backgroundStyle,
    height: isHomeRoute ? "730px" : "350px", // Adjust height based on route
  };

  return (
    <div
      className={`top-container ${isHomeRoute ? "home-route" : ""}`}
      style={style}
    ></div>
  );
};

export default Top;
