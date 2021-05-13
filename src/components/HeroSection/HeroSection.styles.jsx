import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const HeroContainer = styled.div`
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
`

export const HeroRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

`

export const HeroTextWrapper = styled.div`
    @media screen and(max - width: 768px){
        padding-bottom: 65px;
    }
`

export const Title = styled.h1`
	color: #fff;
	font-size: 48px;
	font-weight: 900px;
	letter-spacing: 1.5px;
	padding: 5px 20px 5px 20px;
	align-text: center;
	z-index: 1;
	display: flex;
	justify-content: center;

	@media (max-width: 864px) {
		font-size: 36px;
	}

	@media (max-width: 768px) {
		font-size: 26px;
	}

	@media (max-width: 555px) {
		font-size: 18px;
	}

	@media (max-width: 388px) {
		font-size: 16px;
	}

	@media (max-width: 355px) {
		font-size: 12px;
	}

	@media (max-width: 290px) {
		font-size: 10px;
	}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Highlight = styled(LinkS)`
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    display: inline-block;
    padding: 0px 10px;

    &:hover{
        -webkit-text-fill-color: #46caca;
        -webkit-text-stroke-width: 0px;
        cursor: pointer;
    }
`

export const SocialMediaIconWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sozing: border-box;
    font-family: 'Poppins', sans-serif;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
`

export const Icon = styled.div`
	display: inline-flex;
	height: 60px;
	width: 60px;
	border-radius: 50px;
	box-sizing: border-box;
	line-height: 60px;
	justify-content: center;
	align-items: center;

	@media (max-width: 320px) {
		width: 30px;
		height: 30px;
	}
`;

export const SocialButton = styled.div`
	display: inline-block;
	height: 60px;
	width: 60px;
	float: left;
	margin: 5px;
	background: #fff;
	border-radius: 50px;
	cursor: pointer;
	box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
	overflow: hidden;

	&:hover {
		width: 200px;
		${Icon} {
			color: #fff;
			background: #1b2735;
			transition: all 0.2s ease-in-out;
		}
        
		@media (max-width: 768px) {
			width: 60px;
		}
	}

	@media (max-width: 320px) {
		width: 30px;
		height: 30px;
	}
`;

export const FaI = styled(FaInstagram)`
	font-size: 25px;
	line-height: 60px;
`;
export const FaT = styled(FaTwitter)`
    font-size: 25px;
    line-height: 60px;
`
export const FaG = styled(FaGithub)`
    font-size: 25px;
    line-height: 60px;
`
export const FaL = styled(FaLinkedin)`
    font-size: 25px;
    line-height: 60px;
`

export const Span = styled.span`
    display: inline-flex;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    padding-top: -10px;
    justify-content: center;
    text-align: center;
`

export const Arrow = styled(AiOutlineArrowRight)`
    margin-left: 5px;
`

export const Resume = styled(LinkR)`
	position: absolute;
	right: 2rem;
	top: 2rem;
	background: transparent;
	white-space: nowrap;
	padding: 10px 20px;
	color: #fff;
	font-size: 18px;
	letter-spacing: 1px;
	text-decoration: none;
	border: 2px solid #fff;
	cursor: pointer;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #46caca;
		color: #fff;
		border: 2px solid #46caca;
		${Arrow} {
			transform: translateX(5px);
			transition: all 0.3s ease-in-out;
		}
	}

	@media (max-width: 560px) {
		padding: 3px 8px;
		font-size: 12px;
		right: 1rem;
		top: 1rem;
	}
`;