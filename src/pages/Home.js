import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
// import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import FooterContainer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar.components.jsx";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 4000);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader isLoading={isLoading} />
			) : (
				<>
					<Navbar toggle={toggle} />
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<HeroSection />
					<AboutSection />
					{/* <WorkSection /> */}
					<ContactSection />
					<FooterContainer />
				</>
			)}
		</>
	);
};

export default Home;
