import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>  
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
        </>
    )
}

export default Home;