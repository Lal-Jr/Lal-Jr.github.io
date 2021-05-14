import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import FooterContainer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<WorkSection />
			<ContactSection />
			<FooterContainer />
		</>
	);
};

export default Home;
