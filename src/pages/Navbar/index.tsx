import React, { useEffect, useState } from "react"
import './style.css';
import { Link } from "react-scroll";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);
    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div className="content">
                <Link onClick={closeMenu}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="heroSection"
                    className="navbar--container--img"
                >
                    <p className="navbar--img">
                        {"{/} Alessandro.dev"}
                    </p>
                </Link>
                <a
                    className={`nav__hamburger ${navActive ? "active" : ""}`}
                    onClick={toggleNav}
                >
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
                    <span className="nav__hamburger__line"></span>
                </a>
                <div className={`navbar--items ${navActive ? "active" : ""}`}>
                    <ul>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="headerSection"
                                className="navbar--content"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="skillsSection"
                                className="navbar--content"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="projectSection"
                                className="navbar--content"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="canhelpSection"
                                className="navbar--content"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="navbar--active-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="aboutmeSection"
                                className="navbar--content"
                            >
                                About Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}
