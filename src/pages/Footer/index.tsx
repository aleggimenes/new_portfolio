import React from 'react';
import './style.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <section className='footer--container'>
            <div className='footer-items'>
                <div className='footer-contact'>
                    <h1 className='footer-link-contact'>
                        Contact
                    </h1>
                    <p className='contact-text'>
                        email: alessandrog.gimenes@gmail.com
                    </p>
                </div>
                <div className='footer-items-link'>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="footer-link"
                    >
                        Home
                    </Link>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="headerSection"
                        className="footer-link"
                    >
                        Projects
                    </Link>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="skillsSection"
                        className="footer-link"
                    >
                        Services
                    </Link>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="canhelpSection"
                        className="footer-link"
                    >
                        Skills
                    </Link>
                    <Link
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="aboutmeSection"
                        className="footer-link"
                    >
                        About Me
                    </Link>
                </div>
            </div>
            <div className='line' />
            <div className='footer-icon-container'>
                <a className='footer-icon-href' href="https://www.linkedin.com/in/alessandro-gabriel/">
                    <FaGithub className='footer-icon' />
                </a>
                <FaLinkedinIn className='footer-icon' />
            </div>
        </section>
    )
}