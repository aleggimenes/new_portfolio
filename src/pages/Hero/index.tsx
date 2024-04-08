import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import './style.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Hero() {
    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });
    const [ref4, inView4] = useInView({ threshold: 0.5 });
    const [ref5, inView5] = useInView({ threshold: 0.5 });
    const [rocketWidth, setRocketWidth] = useState(8);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const [{ height }, setHeight] = useSpring(() => ({ height: '0%' }));

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        setHeight({ height: `${scrollPercentage}%` });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleWidthChange = () => {
        const scrollPosition = window.pageYOffset;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / scrollHeight;
        const halfScrollHeight = scrollHeight / 2;
        const minWidth = 3;
        const maxWidth = 30;

        if (scrollPosition >= halfScrollHeight) {
            const newWidth = minWidth + (maxWidth - minWidth) * (1 - scrollPercentage);
            setRocketWidth(newWidth);
        } else {
            const newWidth = minWidth + (maxWidth - minWidth) * scrollPercentage;
            setRocketWidth(newWidth);
        }
    };


    React.useEffect(() => {
        window.addEventListener('scroll', handleWidthChange);
        return () => {
            window.removeEventListener('scroll', handleWidthChange);
        };
    }, []);


    return (
        <div id='heroSection'>
            <ParallaxProvider >
                <div className="hero-top-fade-top" />
                <div className='hero-section-laptop-container'>
                    <animated.img src="./img/rocket.png" alt="" style={{ width: `${rocketWidth}%`, paddingTop: '90px', zIndex: 2, }} />
                    <Parallax translateY={[10, 190]} style={{ width: '100%' }}>
                        <img src="https://awv3node-homepage.surge.sh/build/assets/satellite4.svg" alt="" style={{ width: '8%', paddingTop: '20px', zIndex: 2 }} />
                    </Parallax>
                    <Parallax style={{ position: 'absolute', top: '1000px', width: '100%' }}
                        translateY={[10, 190]}>
                        <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" alt="" style={{ width: '8%', paddingTop: '20px', zIndex: 2, marginLeft: 420 }} />
                    </Parallax>
                    <Parallax style={{ position: 'absolute', top: '1800px', width: '100%', display: 'flex', alignItems: 'center' }}
                        translateY={[10, 190]}>
                        <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" alt="" style={{ width: '8%', paddingTop: '20px', zIndex: 2, }} />
                    </Parallax>
                    <div className='contain-info'>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView5 ? "visible" : "hidden"}
                            ref={ref5}
                        >
                            <p className="contain-info-title">Hey, I'm Alessandro</p>
                            <h1 className="contain-info-subtitle">
                                Full Stack
                                Developer
                            </h1>
                        </motion.div>
                        <motion.p className="contain-info-text"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView1 ? "visible" : "hidden"}
                            ref={ref1}
                        >
                            Passionate about crafting innovative solutions that make a
                            difference.
                        </motion.p>
                        <motion.p className="contain-info-text"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView2 ? "visible" : "hidden"}
                            ref={ref2}>
                            With a blend of creativity and technical expertise,

                        </motion.p>
                        <motion.p className="contain-info-text"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView3 ? "visible" : "hidden"}
                            ref={ref3}>
                            I excel at making ideas real and pushing digital boundaries.
                        </motion.p>
                        <motion.p className="contain-info-text"
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView4 ? "visible" : "hidden"}
                            ref={ref4}>
                            Let's build something amazing together!

                        </motion.p>
                    </div>

                </div>
            </ParallaxProvider>
        </div>
    );
}
