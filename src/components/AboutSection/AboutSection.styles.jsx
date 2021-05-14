import styled from "styled-components";

export const AboutContainer = styled.div`
	height: 100vh;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;

	@media (max-width: 864px) {
		height: 110vh;
	}

	@media (max-width: 768px) {
		height: 120vh;
	}

	@media (max-width: 555px) {
		height: 130vh;
	}

	@media (max-width: 388px) {
		height: 160vh;
	}

	@media (max-width: 355px) {
		height: 180vh;
	}

	@media (max-width: 290px) {
		height: 210vh;
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
export const SubText = styled.p`
	margin: 0px 8vw;
	line-height: 1.6;
	justify-content: center;
	align-items: start;
	color: #fff;
`;

export const Icon = styled.span``;
