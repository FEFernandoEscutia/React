import { useState } from "react";
import { links, social } from "../data";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header"></div>
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div>
          <div className="links-container">
            <ur className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ur>
          </div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
