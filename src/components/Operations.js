import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Operations = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/operations";

  return (
    <div>
      {isMainPage && (
        <div>
          <h1>Operations</h1>
          <p>
            Main content for Operations. This content will only be shown on the
            main Operations page.
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Operations;
