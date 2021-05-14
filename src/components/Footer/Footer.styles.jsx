import styled from "styled-components";

export const FooterContainer = styled.div`
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	position: sticky;
	top: 0;
	border-top: 1px solid #46caca;
	overflow: hidden;
	height: 6vh;
`;

export const Para = styled.p`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: #fff;
	font-size: 20px;
	width: 100vw;
	padding-top: 2vh;

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;
