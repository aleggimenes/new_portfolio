import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Hero from "../Hero";
import Skills from "../Skills";
import Project from "../Projects";
import CanHelp from "../CanHelp";
import AboutMe from "../AboutMe";
export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Hero />
            <Skills />
            <Project />
            <CanHelp />
            <AboutMe />
        </>
    )
}