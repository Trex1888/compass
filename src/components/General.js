import React from "react";
import "../styles/General.css";
import desmoinesFlyingServiceLogo from "../images/pic1.png";
import elliottAviationLogo from "../images/pic2.png";
import modernAviationLogo from "../images/pic3.png";
import signatureFlightSupportLogo from "../images/pic4.png";

const General = () => {
  return (
    <div className="about-header">
      <h1>General Aviation</h1>
      <p>
        The convenience of an international airport only 10 minutes from
        downtown makes DSM a popular stop for corporate air travel in and out of
        Des Moines. Des Moines International Airport is proud to partner with
        Modern Aviation and Signature Flight Support to offer general aviation
        services to Central Iowa as well as Des Moines Flying Service and
        Elliott Aviation which provide aircraft maintenance.
      </p>
      <p>
        Modern Aviation and Signature Flight Support are fixed-based operators
        at the Des Moines International Airport offering full aircraft servicing
        and fuel, including 100LL and JetA. Transient hangar and tie-down
        options are available at each fixed-based operator (FBO). Elliott
        Aviation and Des Moines Flying Service have complete aircraft
        maintenance service facilities and personnel.
      </p>

      <div className="aviation-service">
        <img src={desmoinesFlyingServiceLogo} alt="Des Moines Flying Service" />
        <div className="contact-info">
          <div>
            <p>6307 SW 28th Street</p>
            <p className="phone-numbers">800-622-8311</p>
            <p className="phone-numbers">515-256-5300</p>
            <p className="website">
              <a
                href="http://desmoinesflyingservice.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                desmoinesflyingservice.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="aviation-service">
        <img src={elliottAviationLogo} alt="Elliott Aviation" />
        <div className="contact-info">
          <div>
            <p>2800 SW McKinley</p>
            <p className="phone-numbers">515-285-6555</p>
            <p className="website">
              <a
                href="http://elliottaviation.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                elliottaviation.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="aviation-service">
        <img src={modernAviationLogo} alt="Modern Aviation" />
        <div className="contact-info">
          <div>
            <p>2700 SW McKinley</p>
            <p className="phone-numbers">515-285-6551</p>
            <p className="website">
              <a
                href="http://modern-aviation.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                modern-aviation.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="aviation-service">
        <img src={signatureFlightSupportLogo} alt="Signature Flight Support" />
        <div className="contact-info">
          <div>
            <p>5600 Fleur Drive</p>
            <p className="phone-numbers">515-256-5330</p>
            <p className="website">
              <a
                href="http://signatureflight.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                signatureflight.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
