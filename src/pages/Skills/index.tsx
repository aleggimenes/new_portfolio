import React, { useState } from "react";
import './style.css'
import { useSpring, a } from '@react-spring/web'
export default function Skills() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <div className="skills-section">
            <h1 style={{ fontSize: '35px', color: 'white', marginBottom: '40px' }}>Click to see more</h1>
            <div className='container' onClick={() => set(state => !state)}>
                <a.div
                    className='c back'
                    style={{ opacity: opacity.to(o => 1 - o), transform }}
                >
                    <div style={{ width: '90%', display: 'flex', padding: '20px', flexDirection: 'row', gap: '22px', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto' }}>
                        <div className="small-circle-red" />
                        <div className="small-circle-yellow" />
                        <div className="small-circle-green" />
                    </div>
                    <div style={{ width: '90%', border: '1px solid  #161616', margin: '0 auto' }} />
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ lineHeight: '74.4px', fontWeight: '500', fontSize: '62px', marginBottom: '40px', marginTop: '80px' }}>Backend</h1>
                        <p style={{ lineHeight: '28px', fontSize: '20px', width: '80%', textAlign: 'center', letterSpacing: '0.7px' }}>
                            Using technologies like NodeJS and AdonisJS, I excel at building efficient APIs and completing data processing tasks seamlessly. With in-depth knowledge of database administration, specifically MySQL, I ensure the integrity and security of data storage and retrieval processes.
                        </p>
                    </div>
                </a.div>
                <a.div
                    className={`c front`}
                    style={{
                        opacity,
                        transform,
                        rotateX: '180deg',
                    }}
                >
                    <div style={{ width: '90%', display: 'flex', padding: '20px', flexDirection: 'row', gap: '22px', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto' }}>
                        <div className="small-circle-red" />
                        <div className="small-circle-yellow" />
                        <div className="small-circle-green" />
                    </div>
                    <div style={{ width: '90%', border: '1px solid  #cdcdcd', margin: '0 auto' }} />

                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ lineHeight: '74.4px', fontWeight: '500', fontSize: '62px', marginBottom: '40px', marginTop: '80px' }}>Frontend</h1>
                        <p style={{ lineHeight: '28px', fontSize: '20px', width: '80%', textAlign: 'center', letterSpacing: '0.7px' }}>
                            My toolkit includes ReactJS, NextJS, and Chakra-ui, enabling me to build dynamic and responsive web applications tailored to meet diverse client needs.
                        </p>
                    </div>
                </a.div>
            </div >
        </div >
    )
}