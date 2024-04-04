import React, { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import './style.css';

export default function AboutMe() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ParallaxProvider>
            <section className="section-aboutme">
                <div className="outdoor-text">
                    <p className="text">Passionate creative developer with skills</p>
                </div>
                <div className="aboutme-container">
                    {isMobile ?
                        <div className="aboutme-info-box">
                            <p className="aboutme-info-p">
                                In my previous role, I spent 3 years working as a
                                fullstack developer, gaining invaluable experience across diverse
                                projects such as e-commerce platforms and applications designed to
                                streamline essential business processes.
                                <br />
                                <br />
                                I have experience with React and React Native, used for building
                                interfaces for websites and mobile apps.
                                <br />
                                <br />
                                I'm also comfortable with
                                frameworks like NodeJS and Adonis, which help build the server-side
                                of apps. Additionally, I can handle databases like SQLServer and
                                MySQL well.
                            </p>
                        </div>
                        :
                        <>
                            <div className="aboutme-info-box">
                                <p className="aboutme-info-p">
                                    In my previous role, I spent 3 years working as a
                                    fullstack developer, gaining invaluable experience across diverse
                                    projects such as e-commerce platforms and applications designed to
                                    streamline essential business processes.
                                    <br />
                                    <br />
                                    I have experience with React and React Native, used for building
                                    interfaces for websites and mobile apps.
                                    <br />
                                    <br />
                                    I'm also comfortable with
                                    frameworks like NodeJS and Adonis, which help build the server-side
                                    of apps. Additionally, I can handle databases like SQLServer and
                                    MySQL well.
                                </p>
                            </div>
                            <Parallax translateY={[-30, 20]} style={{ width: '40%', justifyContent: 'center', display: 'flex', alignItems: 'center', height: '520px' }}>
                                <div className="aboutme-img-box" />
                            </Parallax>
                        </>
                    }
                </div>
            </section>
        </ParallaxProvider>
    );
}