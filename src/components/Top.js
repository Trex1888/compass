import { useLocation } from "react-router-dom";
import "../styles/Top.css";

const Top = ({ backgroundStyle }) => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  const isFlyRoute = location.pathname === "/lift-dsm";

  const style = {
    ...backgroundStyle,
    height: isFlyRoute ? "675px" : isHomeRoute ? "740px" : "350px",
  };

  return (
    <div
      className={`top-container ${isHomeRoute ? "home-route" : ""} ${
        isFlyRoute ? "fly-route" : ""
      }`}
      style={style}
    ></div>
  );
};

export default Top;
