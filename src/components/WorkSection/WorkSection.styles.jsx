import styled from "styled-components";

export const WorkContainer = styled.div`
	height: 100vh;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;

	@media (max-width: 425px) {
		height: 200vh;
	}
`;

export const Title = styled.h1`
	text-align: center;
	padding: 12vh 0px 1vh 0px;
	font-size: 40px;
	color: #46caca;
	font-weight: bold;
	text-transform: uppercase;

	@media (max-width: 768px) {
		font-size: 26px;
	}
`;
export const Content = styled.div`
	display: flex;
	justify-items: center;
	align-items: center;
	// width: min(90%, 80rem);

	@media (max-width: 768px) {
		flex-direction: column;
	}

	@media (max-width: 425px) {
		flex-direction: column;
	}
`;

export const Divider = styled.div`
	height: 1.5vh;
	display: inline-block;
`;

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-inline: 10%;
	flex-direction: column;

	@media (max-width: 768px) {
		flex-direction: row;
	}

	@media (max-width: 425px) {
		flex-direction: column;
	}
`;
