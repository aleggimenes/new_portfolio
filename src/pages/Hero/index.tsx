import React from 'react';
import { useSpring } from 'react-spring';
import { ParallaxProvider } from "react-scroll-parallax";
import './style.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Hero() {
    const [ref1, inView1] = useInView({ threshold: 0.5 }); // Ref e estado para o primeiro componente
    const [ref2, inView2] = useInView({ threshold: 0.5 }); // Ref e estado para o segundo componente
    const [ref3, inView3] = useInView({ threshold: 0.5 }); // Ref e estado para o terceiro componente
    const [ref4, inView4] = useInView({ threshold: 0.5 }); // Ref e estado para o segundo componente

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const [{ height }, setHeight] = useSpring(() => ({ height: '0%' }));

    // Função para controlar a altura da imagem com base no valor de scrollTop
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / scrollHeight) * 100;
        setHeight({ height: `${scrollPercentage}%` });
    };

    // Adiciona um observador de rolagem ao componente
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxProvider>
            <div className='hero-section-laptop-container'>
                <img src="./img/rocket.png" alt="" style={{ width: '25%', paddingTop: '120px', zIndex: 2 }} />
                <div className='contain-info'>
                    <p className="contain-info-title">Hey, I'm Alessandro</p>
                    <h1 className="contain-info-subtitle">
                        Full Stack
                        Developer
                    </h1>
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
    );
}
