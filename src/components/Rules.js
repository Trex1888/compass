import React from "react";
import "../styles/Rules.css";

const Rules = () => {
  return (
    <div>
      <div className="about-header">
        <h1>Rules, Regulations, Policies & Procedures</h1>
        <h2>Airport Documents</h2>
        <div className="documents-list">
          <p>
            <a href="/documents/airport-authority-rules-and-regulations">
              Airport Authority Rules and Regulations
            </a>
          </p>
          <p>
            <a href="/documents/airport-minimum-standards">
              Airport Minimum Standards
            </a>
          </p>
          <p>
            <a href="/documents/tarmac-delay-contingency-plan">
              Tarmac Delay Contingency Plan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
