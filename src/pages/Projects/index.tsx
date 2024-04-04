import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Project() {
    return (
        <section className='project-section'>
            <div className='project-header-content' >
                <p className='project-title'>
                    Projects
                </p>
            </div>
            <div className='subtitle-header-container'>
                <p className='subtitle-header' style={{ marginBottom: '90px', color: 'white', fontSize: '26px' }}>Here are some of my best projects.</p>
            </div>
            <div className="project-container">
                <motion.div
                    className="project-content"
                    style={{ backgroundImage: `url(/img/fastos.png)`, backgroundSize: 'cover' }}
                    whileHover={{ translateY: -20 }}
                >
                    <motion.div className="project-items">
                        <h1 className="project-items-h1">Fastos</h1>
                        <p className="project-items-p">
                            Fastos delivery is a quick and convenient service that has become increasingly popular in recent years.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="project-content"
                    style={{ backgroundImage: `url(/img/krypto.png)`, backgroundSize: 'cover' }}
                    whileHover={{ translateY: -20 }}
                >
                    <motion.div className="project-items">
                        <h1 className="project-items-h1">Krypto</h1>
                        <p className="project-items-p">
                            Easy way to learn and earny how to trade
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}