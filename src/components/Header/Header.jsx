import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const mobileview = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menu === false && mobileview === true ? (
        <div
          onClick={() => setMenu(true)}
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <img
            src={bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              span={true}
              activeClass="active"
              smooth={true}
              onClick={() => setMenu(false)}
              to="hero"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
              to="programs"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
              to="whyus"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
              to="plans"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
              to="trainers"
            >
              Trainers
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
