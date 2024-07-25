import "../styles/LiftDSM.css";

const LiftDSM = ({ backgroundStyle }) => {
  return (
    <div className="fly-container-content">
      <div className="lift-header-part">
        <h1 style={{ fontSize: "72px", fontWeight: "500" }}>The New DSM </h1>
        <h3>
          Revolutionizing the passenger experience and operational efficiency at
          the Des Moines International Airport.
        </h3>
        <p>
          Lift DSM projects are interconnected; they are capital improvement
          projects that improve the safety and experience of passengers
          traveling through the Des Moines International Airport while also
          improving the operational efficiency of employees. Each Lift project
          will aid one or more strategic areas, yielding long-term regional and
          state benefits. The strategic areas include airport experience,
          growth, and efficiency.
        </p>
      </div>
      <div className="lift-bottom-part">
        <h1>Lift DSM</h1>
        <h2>Elevating the Travel Journey</h2>
        <p>
          The Des Moines International Airport's most recent terminal area
          forecast predicts 5 million passengers will use the airport facilities
          by 2042. The existing terminal building cannot adequately process that
          volume of passengers. The Airport Authority has worked relentlessly to
          maintain a pleasant passenger experience, but the current facilities
          are not equipped to handle sustained growth. Several operational
          priorities are measured to determine the quality of service the
          airport provides to meet the travel needs of Iowa. These priority
          facilities include gates, ticketing, security, baggage outbound,
          baggage inbound, holdrooms and concessions, and restrooms.
        </p>
        <p>
          The new terminal will address these priority facilities ensuring we
          can meet the growing air travel demand for our region and remain the
          gateway to Iowa. The master plan includes a new terminal (Phase 1A)
          with the ability to expand through the implementation of two
          additional phases (Phase 1B and Phase 1C). The Des Moines Airport
          Authority is committed to creating a passenger experience that is good
          for both the travelers of today and for those in the future.
        </p>
        <h2 style={{ color: "#36294a", fontWeight: "500" }}>Contributors</h2>
        <p>
          The Des Moines Airport Authority is grateful to each financial
          contributor who understand the economic vitality of the Des Moines
          International Airport and have pledged funds to assist with the
          construction of the new terminal building which is poised to benefit
          all of Central Iowa.{" "}
        </p>
        <p>
          City of Des Moines ● Polk County ● City of Ankeny ● City of West Des
          Moines ● City of Urbandale ● City of Waukee ● City of Altoona ● City
          of Clive ● City of Johnston ● City of Indianola ● City of Norwalk ●
          City of Grimes ● City of Pleasant Hill ● City of Newton ● City of
          Bondurant ● City of Polk City ● City of Windsor Heights ● City of
          Mitchellville ● Warren County ● City of Alleman ● Prairie Meadows
          Casino & Hotel
        </p>
        <p style={{ marginTop: "70px", fontStyle: "italic", fontSize: "15px" }}>
          *All images are illustrative renderings and are subject to change.
        </p>
      </div>
    </div>
  );
};

export default LiftDSM;
