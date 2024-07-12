import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Tenant = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/airport-business/tenant-resources";

  return (
    <div>
      {isMainPage && (
        <div>
          <h1>Tenant Resources</h1>
          <p>
            Main content for Tenant Resources. This content will only be shown
            on the main Tenant Resources page.
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Tenant;
