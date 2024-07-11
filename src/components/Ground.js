import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Ground = () => {
  const location = useLocation();
  const isMainGroundRoute =
    location.pathname === "/at-the-airport/ground-transportation";

  return (
    <div>
      {isMainGroundRoute && (
        <div>
          <h1>Ground Transportation</h1>
          <p>Information about ground transportation at the airport...</p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Ground;
