import React from "react";
import { useLocation, Outlet } from "react-router-dom";

const AirService = () => {
  const location = useLocation();
  const isMainPage =
    location.pathname ===
    "/airport-business/tenant-resources/air-service-development";

  return (
    <div>
      {isMainPage && (
        <div>
          <h1>Air Service Development</h1>
          <p>
            The Des Moines Airport Authority works to grow and improve
            connectivity to and from Iowa through its air service development
            program. Airport Authority staff meet with new airlines to discuss
            opportunities to enter the market to increase competition and offer
            new service; additionally, staff works with airlines currently
            serving the market to increase frequency in flights, up-gauge
            aircraft to offer more seats, and add new, nonstop destinations. To
            support growth in the market, the Airport Authority offers an{" "}
            <a href="#">Airline Incentive Policy</a> to support the initial
            investment necessary for airlines to add service to a market.
          </p>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default AirService;
