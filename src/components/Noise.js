import React from "react";
import "../styles/Noise.css";

const Noise = () => {
  return (
    <div>
      <div className="about-header">
        <h1>Aircraft Noise Program</h1>
        <p>
          The Des Moines International Airport strives to be a good neighbor. If
          you have a comment or concern about aircraft noise, please follow the
          steps below.
        </p>
        <h2>Submit Your Feedback</h2>
        <h3>Step 1:</h3>
        <p>
          Determine how far you are from DSM using the{" "}
          <a href="#">FAA ArcGIS Mapping Tool</a>.
        </p>
        <h3>Step 2:</h3>
        <p>
          If your location is farther than 5 miles from the DSM Airport, use the{" "}
          <a href="#">FAA Noise Portal</a> to file your comment. If you are
          within 5 miles of the DSM Airport, proceed to Step 3.
        </p>
        <h3>Step 3:</h3>
        <p>
          If your location is within 5 miles of the DSM Airport, use the{" "}
          <a href="#">DSM Aircraft Noise Form</a> to file your comment.
        </p>
        <p>
          For more information on how the FAA Central Region handles noise
          comments and inquiries, please refer to the{" "}
          <a href="#">
            FAA Central Region Aircraft Noise and Community Involvement
            Information website
          </a>
          .
        </p>
        <h3>Notice to Pilots</h3>
        <p>
          Informal noise abatement procedures are in effect. Expect ATC to
          assign the preferred runway.
        </p>
      </div>
    </div>
  );
};

export default Noise;
