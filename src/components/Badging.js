import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Badging = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/badging";

  return (
    <div>
      {isMainPage && (
        <div>
          <h1>Badging</h1>
          <p>
            Main content for Badging. This content will only be shown on the
            main Badging page.
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Badging;
