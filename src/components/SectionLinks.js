import "../styles/SectionLinks.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoMailOutline, IoMapOutline } from "react-icons/io5";
import { CiParking1 } from "react-icons/ci";
import { PiForkKnifeLight, PiVanLight } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";

const SectionLinks = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="section-links-container">
      <div className="section-links">
        <Link to="/at-the-airport/maps-directions" className="link-item">
          <IoMapOutline className="icon" />
          <p>Maps</p>
        </Link>
        <Link to="/at-the-airport/parking" className="link-item">
          <CiParking1 className="icon" />
          <p>Parking</p>
        </Link>
        <Link to="/at-the-airport/services-amenities" className="link-item">
          <MdPeopleOutline className="icon" />
          <p>Amenities</p>
        </Link>
        <Link to="/at-the-airport/shuttle-tracking" className="link-item">
          <PiVanLight className="icon" />
          <p>Shuttle</p>
        </Link>
        <Link to="/at-the-airport/dining" className="link-item">
          <PiForkKnifeLight className="icon" />
          <p>Dining</p>
        </Link>
        <Link to="/contact" className="link-item">
          <IoMailOutline className="icon" />
          <p>Contact</p>
        </Link>
      </div>
      <div className="spacer"></div>
      <div className="social-icons">
        <RiTwitterXLine className="social-icon" />
        <GrFacebookOption className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
    </div>
  );
};

export default SectionLinks;
