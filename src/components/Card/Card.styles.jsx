import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	transition: all 0.3s ease-in-out;
	background: rgba(30, 30, 30, 0.25);
	border: 1px solid rgba(255, 255, 255, 0.18);
	margin: 1vh;
	height: 38vh;
	width: 53vh;

	&:hover {
		transform: scale(1.02);
	}

	@media (max-width: 768px) {
		height: 27vh;
		width: 54vw;
		margin-left: 5vw;
	}
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	height: 25vh;
	width: 50vh;
	display: flex;
	justify-content: center;
	padding: 1.5vh;

	@media (max-width: 768px) {
		height: 18vh;
		width: 46vw;
		margin-left: 1.5vw;
	}

	@media (max-width: 555px) {
		margin-left: 1vw;
	}
`;

export const CardContent = styled.div`
	color: #46caca;
	text-align: center;
`;

export const CardTitle = styled.h2`
	margin: 1vh 0;
	padding: 0;
	color: #fff;

	@media (max-width: 768px) {
		font-size: 22px;
		margin: 0.4vh 0;
	}

	@media (max-width: 555px) {
		font-size: 16px;
	}
`;

export const Button = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: inherit;

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 555px) {
		font-size: 10px;
	}
`;

export const ContentWrapper = styled.div`
	margin: 10px;

	@media (max-width: 1150px,min-width: 768px) {
		padding-left: 1vw;
	}
`;

export const ButtonWrapper = styled.span`
	display: flex;
	justify-content: space-evenly;
`;
