import React from 'react';
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
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));


    return (
        <ParallaxProvider>
            <div className="hero-top-fade-top" />
            <div className='hero-section-laptop-container'>
                <animated.img src="./img/rocket.png" alt="" style={{ width: '12%', paddingTop: '120px', zIndex: 2 }} />
                <Parallax translateY={[10, 190]} style={{ width: '100%' }}>
                    <img src="https://awv3node-homepage.surge.sh/build/assets/satellite4.svg" alt="" style={{ width: '8%', paddingTop: '20px', zIndex: 2 }} />
                </Parallax>
                <Parallax style={{ position: 'absolute', top: '1000px', width: '100%' }}
                    translateY={[10, 190]}>
                    <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" alt="" style={{ width: '8%', paddingTop: '20px', zIndex: 2, }} />
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
                {/* <img
                    src="https://awv3node-homepage.surge.sh/build/assets/earth.svg"
                    alt=""
                    style={{
                        position: 'absolute',
                        width: '38%',
                        paddingBottom: '120px', 
                        zIndex: 1,
                        bottom: 0, 
                        overflow: 'hidden',
                        clipPath: 'inset(0px 0px 50% 0px)'
                    }}
                /> */}
            </div>
        </ParallaxProvider>
    );
}
