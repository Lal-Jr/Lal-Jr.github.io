import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>  
            <Navbar />
            <HeroSection />
            <AboutSection />
        </>
    )
}

export default Home;