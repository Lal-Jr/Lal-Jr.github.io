import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../App.css";

export const HeroContainer = styled.div`
	height: 100vh;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;
`;

export const HeroRow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const HeroTextWrapper = styled.div`
	@media screen and(max - width: 768px) {
		padding-bottom: 65px;
	}
`;

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
`;

export const Highlight = styled(LinkS)`
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke-width: 1.5px;
	display: inline-block;
	padding: 0px 10px;

	&:hover {
		-webkit-text-fill-color: #46caca;
		-webkit-text-stroke-width: 0px;
		cursor: pointer;
	}

	@media (max-width: 864px) {
		-webkit-text-stroke-width: 1.3px;
	}

	@media (max-width: 768px) {
		-webkit-text-stroke-width: 1px;
	}

	@media (max-width: 555px) {
		-webkit-text-stroke-width: 0.8px;
	}

	@media (max-width: 388px) {
		-webkit-text-stroke-width: 0.6px;
	}

	@media (max-width: 355px) {
		-webkit-text-stroke-width: 0.4px;
	}

	@media (max-width: 290px) {
		-webkit-text-stroke-width: 0.2px;
	}
`;

export const Icon = styled.a`
	width: 50px;
	height: 50px;
	display: block;
	transition: 0.5s;
	background: #ccc;
`;

export const Span = styled.span`
	font-weight: bold;
	width: 100%;
	height: 100%;

	&:before {
		font-family: fontAwesome;
		text-align: center;
		line-height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		color: #262626;
		font-size: 30px;
		transform-origin: top;
		transition: transform 0.5s;
	}

	&:after {
		font-family: fontAwesome;
		text-align: center;
		line-height: 50px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		color: #262626;
		font-size: 30px;
		transform-origin: bottom;
		transition: transform 0.5s;
		transform: rotateX(90deg) translateY(50%);
	}
`;

export const SocialMediaIconWrapper = styled.ul`
	position: absolute;
	right: 2rem;
	bottom: 2rem;
	margin: 0;
	padding: 0;
	display: flex;

	@media (max-width: 768px) {
		bottom: 1rem;
		right: 1rem;
	}

	@media (max-width: 425px) {
		right: 4rem;
	}

	@media (max-width: 400px) {
		right: 2.5rem;
	}

	@media (max-width: 320px) {
		right: 1.25rem;
	}
`;

export const SocialButton = styled.li`
	list-style: none;
	position: relative;
	margin: 0 10px;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		bottom: -8px;
		width: 50px;
		height: 10px;
		background: #fff;
		border-radius: 50%;
		transition: 0.5s;
		opacity: 0;
		filter: blur(2px);
		transform: scale(0.8);
	}

	&:hover {
		&:before {
			transition-delay: 0.2s;
			opacity: 0.2;
			transform: scale(1);
		}
		${Icon} {
			transform: translateY(-10px);
		}
		${Span} {
			&:before {
				transform: rotateX(90deg) translateY(-50%);
			}
			&:after {
				transform: rotateX(0deg) translateY(0);
			}
		}
	}
	&:nth-child(1) {
		${Span} {
			&:before {
				content: "\f16d";
			}
			&:after {
				background: #c13584;
				color: #fff;
				content: "\f16d";
			}
		}
	}
	&:nth-child(2) {
		${Span} {
			&:before {
				content: "\f0e1";
			}
			&:after {
				background: #0077b5;
				color: #fff;
				content: "\f0e1";
			}
		}
	}
	&:nth-child(3) {
		${Span} {
			&:before {
				content: "\f09b";
			}
			&:after {
				background: #212529;
				color: #fff;
				content: "\f09b";
			}
		}
	}
	&:nth-child(4) {
		${Span} {
			&:before {
				content: "\f099";
			}
			&:after {
				background: #55acee;
				color: #fff;
				content: "\f099";
			}
		}
	}
`;

export const Arrow = styled(AiOutlineArrowRight)`
	margin-left: 5px;
`;

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
