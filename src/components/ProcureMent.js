import "../styles/Procurement.css";

const Procurement = () => {
  return (
    <div className="bid-procurement-outlet">
      <div className="procedure-container">
        <div className="proc-top-section">
          <h1>Bid Procurement & Request for Proposals</h1>
          <p>
            Thank you for your interest in working with the Des Moines
            International Airport.
            <p>
              {" "}
              Please select from the drop down box to view bid requests, request
              for proposal information, and project closeout notifications. The
              project disqualification listing can be found{" "}
              <a href="/airport-business/bid-procurement-rfps">here</a>.
            </p>
          </p>
        </div>{" "}
        <p style={{ marginTop: "75px", marginBottom: "25px" }}>
          <strong>Sign up for RFP and Bid Request E-Mail Alerts</strong>{" "}
        </p>
        <div className="subscribe-section">
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="category-section">
          <h1>Bid Procurement & RFPs</h1>
          <select className="category-dropdown">
            <option>Category</option>
            <option value="category">Bid Requests</option>
            <option value="category">Project Closeout Notifications</option>
            <option value="category">Request for Proposals</option>
          </select>
        </div>
        <div className="bid-list">
          <div className="bid-item">
            <h3>
              Request for Proposal for Financial Statement Audit for the Des
              Moines Airport Authority
            </h3>
            <p className="date">July 1, 2024</p>
            <a href="/">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>
              Statement of Qualifications for Construction of Des Moines Airport
              Phase 1A Terminal Project (Tile, Demo, Signage)
            </h3>
            <p className="date">May 31, 2024</p>
            <p className="details">
              WEITZ/TURNER, A Joint Venture, will receive Statement of
              Qualifications (also referred to as Preapproval Forms herein) for
              construction of Des Moines Airport Phase 1A Terminal Project in
              Des Moines, Iowa. The project consists of site improvements,
              construction of a new 250,000 square foot two story building, and
              both partial demolition of and renovation of existing building(s).
            </p>
            <a href="/">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>
              Statement of Qualifications for Construction of Des Moines Airport
              Phase 1A Terminal Project (Tiling Walls & Floors – Supply Only)
            </h3>
            <p className="date">May 31, 2024</p>
            <p className="details">
              WEITZ/TURNER, A Joint Venture, will receive Statement of
              Qualifications (also referred to as Preapproval Forms herein) for
              construction of Des Moines Airport Phase 1A Terminal Project in
              Des Moines, Iowa. The project consists of site improvements,
              construction of a new 250,000 square foot two story building, and
              both partial demolition of and renovation of existing building(s).
            </p>
            <a href="/airport-business/bid-procurement-rfps">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>Notice to Bidders: 2024-25 Landside Snow Removal</h3>
            <p className="date">May 23, 2024</p>
            <a href="/airport-business/bid-procurement-rfps">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>
              Advertisement for Statement of Qualifications (Preapproval Forms)
              for Construction of Des Moines Airport Phase 1A Terminal Project
            </h3>
            <p className="date">April 26, 2024</p>
            <a href="/airport-business/bid-procurement-rfps">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>
              Advertisement for Statement of Qualifications (Preapproval Forms)
              for Construction of Des Moines Airport Phase 1A Terminal Project
            </h3>
            <p className="date">March 13, 2024</p>
            <a href="/airport-business/bid-procurement-rfps">Learn More ⟶</a>
          </div>
          <div className="bid-item">
            <h3>
              Advertisement for Statement of Qualifications for Construction of
              Des Moines Airport Phase 1A Terminal Project
            </h3>
            <p className="date">March 5, 2024</p>
            <a href="/airport-business/bid-procurement-rfps">Learn More ⟶</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procurement;
