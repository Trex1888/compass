import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "../styles/TravelerInfo.css";

const TravelerInfo = () => {
  const location = useLocation();

  return (
    <div className="traveler-info-container">
      <div className="traveler-info-sidebar">
        <ul>
          <li>
            <Link
              to="/traveler-info/tsa-security"
              className={
                location.pathname === "/traveler-info/tsa-security"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              TSA & Security
            </Link>
            {location.pathname.startsWith("/traveler-info/tsa-security") && (
              <ul>
                <li>
                  <Link
                    to="/traveler-info/tsa-security/precheck-global-entry"
                    className={
                      location.pathname ===
                      "/traveler-info/tsa-security/precheck-global-entry"
                        ? "flights-link active"
                        : "flights-link"
                    }
                  >
                    TSA Precheck & Global Entry
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/traveler-info/check-in"
              className={
                location.pathname === "/traveler-info/check-in"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Check-in Information
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/lost-and-found"
              className={
                location.pathname === "/traveler-info/lost-and-found"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Lost & Found
            </Link>
            {location.pathname.startsWith("/traveler-info/lost-and-found") && (
              <ul>
                <li>
                  <Link
                    to="/traveler-info/lost-and-found/lost-item-report"
                    className={
                      location.pathname ===
                      "/traveler-info/lost-and-found/lost-item-report"
                        ? "flights-link active"
                        : "flights-link"
                    }
                  >
                    Lost Item Report
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/traveler-info/faq"
              className={
                location.pathname === "/traveler-info/faq"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              Frequently Asked Questions
            </Link>
          </li>
          <li>
            <Link
              to="/traveler-info/real-id"
              className={
                location.pathname === "/traveler-info/real-id"
                  ? "flights-link active"
                  : "flights-link"
              }
            >
              REAL ID
            </Link>
          </li>
        </ul>
      </div>

      <div className="traveler-info-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TravelerInfo;
