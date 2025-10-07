import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  const menu = useRef();
  const mobile = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0,
    });
    tl.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });
  });

  const handleMenuClick = () => {
    mobile.current.classList.toggle("activemobile");
    menu.current.classList.toggle("activeham");
  };

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <Link to="home" activeClass="active" spy smooth duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" activeClass="active" spy smooth duration={500}>
          <li>About</li>
        </Link>
        <Link to="projects" activeClass="active" spy smooth duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contact" activeClass="active" spy smooth duration={500}>
          <li>Contact</li>
        </Link>
        {/* ✅ Added Social Section link */}
        <Link to="social" activeClass="active" spy smooth duration={500}>
          <li>Social</li>
        </Link>
      </ul>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" ref={menu} onClick={handleMenuClick}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobilemenu" ref={mobile}>
        <Link to="home" activeClass="active" spy smooth duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" activeClass="active" spy smooth duration={500}>
          <li>About</li>
        </Link>
        <Link to="projects" activeClass="active" spy smooth duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contact" activeClass="active" spy smooth duration={500}>
          <li>Contact</li>
        </Link>
        {/* ✅ Added Social Section link for mobile too */}
        <Link to="social" activeClass="active" spy smooth duration={500}>
          <li>Social</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
