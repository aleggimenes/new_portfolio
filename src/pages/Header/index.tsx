import React from 'react';
import './style.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function Header() {
    return (
        <section className='header-section'>
            <div className='header-container'>
                <FaAngleLeft style={{ width: '80px', height: '80px' }} />

                <div className='header-line-container '>
                    <div className='header-line ' />
                </div>
                <p className='header-title'>
                    Developer
                </p>
                <FaAngleRight style={{ width: '80px', height: '80px' }} />
            </div>
            <div className='subtitle-header-container'>
                <p className='subtitle-header'>//I turn your requirements into CMS-ified and ecommerce-ified websites.//</p>
            </div>

        </section>
    )

}