import React, { ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import './style.css';

const left = {
    background: `linear-gradient(120deg, #f093fb 0%, #f5576c 100%)`,
    justifySelf: 'center',
};
const right = {
    background: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
    justifySelf: 'center',
};

const Slider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [{ x, background, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }));

    const bind = useDrag(({ active, movement: [mx] }) =>
        api.start({
            x: active ? mx : 0,
            scale: active ? 1.1 : 1,
            ...(mx < 0 ? left : right),
            immediate: (name) => active && name === 'x',
        })
    );

    const avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp',
    });

    // Verifica se o slider está puxado para a esquerda
    const isLeft = x.to((value) => value < 0);

    return (
        <animated.div {...bind()} className='item' style={{ background }}>
            <animated.div className='av' style={{ scale: avSize, justifySelf }}>
                <animated.p style={{ color: 'black', fontSize: 34, lineHeight: '1.5' }}>
                    Hey, I'm Alessandro <br />
                    Passionate about crafting innovative solutions that make a
                    difference.
                </animated.p>
            </animated.div>
            <animated.div className='fg' style={{ x, scale }}>
                {children}
            </animated.div>
        </animated.div>
    );
};

export default function Hero() {
    return (
        <div className='container'>
            <h1>Slide to see more</h1>
            <Slider>About Me</Slider>

        </div>
    );
}