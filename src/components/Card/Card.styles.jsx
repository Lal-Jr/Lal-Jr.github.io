import styled from 'styled-components';

export const CardContainer = styled.div`
	display: relative;
	transition: all 0.3s ease-in-out;
	background: rgba(30, 30, 30, 0.25);
	// backdrop-filter: blur(20px);
	// -webkit-backdrop-filter: blur(20px);
	border: 1px solid rgba(255, 255, 255, 0.18);
	margin: 0 10px;

	&:hover {
		transform: scale(1.02);
	}

	@media (max-width: 768px) {
		margin: 1vh 0;
	}
`;

export const ImageContainer = styled.image`
	overflow: hidden;
	height: 200px;
	width: 400px;
	display: flex;
	justify-content: center;
	padding: 1.5vh;

	@media (max-width: 768px) {
		height: 20vh;
		width: 40vh;
	}

	@media (max-width: 375px) {
		height: 10vh;
		width: 20vh;
	}
`;

export const CardContent = styled.div`
    color: #46caca;
    text-align: center;
`

export const CardTitle = styled.h2`
	margin: 10px 0;
	padding: 0;
    color: #fff;
`;

export const Button = styled.a`
    cursor: pointer;    
`

export const ContentWrapper = styled.div`
    margin: 10px;
`

export const ButtonWrapper = styled.span`
    display: flex;
    justify-content: space-evenly;
`
