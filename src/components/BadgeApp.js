import React from "react";
import "../styles/BadgeApp.css";

const BadgeApp = () => {
  return (
    <div>
      <div className="about-header">
        <h1>Badge Application Process</h1>
        <h2>Badge Application</h2>

        <h3>Step 1: Application</h3>
        <p>
          All badge applications must be submitted via the company Authorized
          Signatory. The Airport Badging Office will not coordinate badging with
          sub-contractors or vendors directly.
        </p>
        <ul>
          <li>
            Sub-Contractors or Vendors working at the Airport need to contact
            the project main contractor or Airport tenant/sponsor that is
            requesting services.
          </li>
          <li>
            If you are a member of the Des Moines Flying Club, please contact
            the club directly at 515-710-0120.
          </li>
          <li>
            If you are a South T Hangar tenant, please contact Amy Fredricks at
            515-256-5006.
          </li>
        </ul>

        <h3>Step 2: Pre-Enrollment</h3>
        <p>
          Authorized Signatory must enroll new applicants and book a fingerprint
          appointment through the{" "}
          <strong>Authorized Signatory Badging Portal</strong>.
        </p>

        <h3>Step 3: Fingerprinting</h3>
        <p>
          1. All applicants must submit to a Security Threat Assessment (STA)
          and a Criminal History Record Check (CHRC). *General Aviation badge
          applicants require only an STA*
        </p>
        <p>
          2. You must provide 2 valid forms of identification as required by the{" "}
          <a href="link-to-identity-and-employment-verification-chart">
            Identity and Employment Verification Chart
          </a>
          .
        </p>
        <p>
          3. Please do not be late for your fingerprint appointment or you will
          have to reschedule. Allow 10-20 minutes for fingerprinting.
        </p>
        <p>
          4. Authorized Signatory will notify the applicant and schedule a badge
          training appointment when the CHRC and STA security checks have been
          completed. Please allow 5-15 days for clearance.
        </p>

        <h3>Step 4: Badge Training</h3>
        <p>
          Badge Training must be completed within 30 days of completed security
          clearance. A new security clearance must be initiated after 30 days
          have passed.
        </p>
        <p>
          <strong>
            Please do not be late for your badge training appointment or you
            will have to reschedule. Allow 30-45 minutes for badge training.
          </strong>
        </p>

        <h2>Badge Renewal</h2>
        <p>
          Please pay close attention to the expiration date printed at the
          bottom of your Airport ID Badge. Failure to renew your badge before
          the expiration date will require a new application and security
          clearance. Badges may be renewed up to 60 days prior to expiration.
        </p>
        <ul>
          <li>
            Badge renewals are done on an appointment basis only. Please contact
            your Authorized Signatory to book a badge training appointment.
          </li>
          <li>
            Expired forms of identification will be required to be updated at
            the time of renewal or a new badge will not be issued.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BadgeApp;
