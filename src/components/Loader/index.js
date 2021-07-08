import React from "react";
import { LoaderContainer, Load, Letter } from "./Loader.styles.jsx";

const Loader = () => {
	return (
		<>
			<LoaderContainer>
				<Load>
					<Letter>G</Letter>
					<Letter>N</Letter>
					<Letter>I</Letter>
					<Letter>D</Letter>
					<Letter>A</Letter>
					<Letter>O</Letter>
					<Letter>L</Letter>
				</Load>
			</LoaderContainer>
		</>
	);
};

export default Loader;
