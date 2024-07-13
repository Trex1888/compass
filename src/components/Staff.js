import { useState } from "react";
import Modal from "./Modal";
import "../styles/Staff.css";
import "../styles/Modal.css";

const Staff = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const staffMembers = [
    {
      img: "https://www.flydsm.com/filesimages/ABOUT%20US/Kevin%20Foley%20-%20headshot%2010.2019.jpg",
      name: "Kevin Foley",
      title: "Executive Director",
      description:
        "Kevin Foley joined the Des Moines International Airport team in 2008, as its Properties Administrator, transitioning to Deputy Aviation Director in January 2009, and then to the Assistant Executive Director position in January 2011.  He accepted the position of Executive Director in February of 2014.  Prior to joining the Airport, Kevin served as an Associate Professor of Aviation for the University of Dubuque.  His professional experience also includes several key management roles with Dubuque Regional Airport, 1992 – 2000, and a stint as a corporate pilot. Kevin possesses a Master of Business Administration degree as well as a Bachelor of Science degree in Aviation Management. Kevin is a certified flight instructor and a multi-engine commercial pilot.",
    },
    {
      img: "https://www.flydsm.com/filesimages/ABOUT%20US/Brian%20Mulcahy%20-%20headshot%2010.2019.jpg",
      name: "Brian Mulcahy",
      title: "Assistant Executive Director",
      description:
        "Brian Mulcahy is the Assistant Executive Director for the Des Moines Airport Authority.  He has been with the Authority since 2011, previously serving as the Director of Finance and Administration.  In this role Brian is responsible for overseeing the daily operations of the Des Moines International Airport. Prior to joining the Authority in 2011, he held management positions in auditing, financial accounting, and operations within the insurance industry.  Brian has been a member of the Army National Guard and Army Reserves for over 30 years, with over 20 years as a pilot of the UH-1 Huey and UH-60 Blackhawk.  Brian has a bachelor’s degree in Accounting from Iowa State University, MBA from University of Phoenix and is an active Certified Public Accountant.",
    },
    {
      img: "https://www.flydsm.com/filesimages/ABOUT%20US/Bryan%20Belt%20-%20headshot%2010.2019.jpg",
      name: "Bryan Belt",
      title: "Director of Engineering & Planning",
      description:
        "Bryan Belt serves as the Director of Engineering & Planning at the Des Moines International Airport with over twenty years of experience in the engineering/construction field and over twelve years of experience in airport design, planning and construction.  As the Director of Engineering & Planning, Bryan has the responsibility of airfield design & planning, public transportation, environmental compliance, DBE program, state and federal programs, building maintenance and information technology.  He received his B.S. in Biological Systems Engineering from the University of Nebraska.  Bryan previously worked as Industrial Engineer at ConAgra Foods and Millard Refrigerated Services.",
    },
    {
      img: "https://www.flydsm.com/filesimages/ABOUT%20US/Clint%20Torp%20-%20headshot%2010.2019.jpg",
      name: "Clinton Torp",
      title: "Director of Operations",
      description:
        "Clinton Torp joined the Des Moines International Airport in April 2019 with over sixteen years of experience in Airport Management.  As the Director of Operations, Clinton has the responsibility of regulatory compliance, airport certification, public safety, operational continuity, and airfield maintenance.  He received his B.B.A. in Aviation Management from the University of North Dakota and his M.B.A. from the University of Wisconsin-La Crosse and is an accredited member of the American Association of Airport Executives.  Clinton holds a commercial pilot’s certificate with both multi and single engine instrument ratings as well a remote pilot certificate.  Clinton previously worked as the Airport Director at both the La Crosse Regional Airport and Devils Lake Regional Airport.",
    },
    {
      img: "https://www.flydsm.com/filesimages/ABOUT%20US/Ni%20Wagner%20-%20resized.jpg",
      name: "Ni Wagner",
      title: "Director of Finance & Administration",
      description:
        "Ni Wagner serves as the Director of Finance and Administration for the Des Moines Airport Authority. In this role, Ni is responsible for all financial accounting and reporting, cash management, lease and operating agreements, and risk management.  Prior to joining the Authority in 2022, she served as the CFO and VP of Retail and Facility Operations for a local nonprofit organization.  She has worked in accounting and financial management roles across a variety of industries for 21 years.  Ni earned her CPA, Master of Accounting, MBA, and is licensed in Life insurance, Health insurance, and Securities (Series 65).",
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <div className="staff-container">
      <div className="staff-content">
        <h1>Airport Leadership</h1>
        <h2>Des Moines Airport Authority Directors</h2>
        <hr />
        <div className="staff-members">
          {staffMembers.map((member, index) => (
            <div
              className="staff-member"
              key={index}
              onClick={() => openModal(member)}
            >
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        handleClose={closeModal}
        member={selectedMember}
      />
    </div>
  );
};

export default Staff;
