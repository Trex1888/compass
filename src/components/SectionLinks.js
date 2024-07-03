import { FaYoutube } from "react-icons/fa";
import "./SectionLinks.css";
import { IoMailOutline, IoMapOutline } from "react-icons/io5";
import { CiParking1 } from "react-icons/ci";
import { PiForkKnifeLight, PiVanLight } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";

const SectionLinks = () => {
  return (
    <div className="section-links-container">
      <div className="section-links">
        <div className="link-item">
          <IoMapOutline className="icon" />
          <p>Maps</p>
        </div>
        <div className="link-item">
          <CiParking1 className="icon" />
          <p>Parking</p>
        </div>
        <div className="link-item">
          <MdPeopleOutline className="icon" />
          <p>Amenities</p>
        </div>
        <div className="link-item">
          <PiVanLight className="icon" />
          <p>Shuttle</p>
        </div>
        <div className="link-item">
          <PiForkKnifeLight className="icon" />
          <p>Dining</p>
        </div>
        <div className="link-item">
          <IoMailOutline className="icon" />
          <p>Contact</p>
        </div>
      </div>
      <div className="social-icons">
        <RiTwitterXLine className="social-icon" />
        <GrFacebookOption className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
    </div>
  );
};

export default SectionLinks;
