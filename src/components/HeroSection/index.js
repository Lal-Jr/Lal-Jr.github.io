import React from "react";
import {
	HeroContainer,
	HeroRow,
	HeroTextWrapper,
	ButtonWrapper,
	Title,
	Highlight,
	SocialMediaIconWrapper,
	SocialButton,
	Icon,
	Span,
	Resume,
	Arrow,
} from "./HeroSection.styles.jsx";
import { Stars, Stars2, Stars3 } from "../../assests/Animation.jsx";
import pdf from "../../assests/Resume.pdf";

const HeroSection = () => {
	return (
		<>
			<HeroContainer id="home">
				<Stars />
				<Stars2 />
				<Stars3 />
				<HeroRow>
					<HeroTextWrapper>
						<Title>
							Hello, I'm
							<Highlight
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={0}
								duration={800}
							>
								Harish Lal
							</Highlight>
							.
						</Title>
						<Title>
							I'm a
							<Highlight
								activeClass="active"
								to="work"
								spy={true}
								smooth={true}
								offset={0}
								duration={800}
							>
								Front-End
							</Highlight>
							Web Developer.
						</Title>
						<ButtonWrapper>
							<Resume to={pdf} target="_blank" rel="noreferrer">
								My Resume
								<Arrow />
							</Resume>
						</ButtonWrapper>
						<SocialMediaIconWrapper>
							<SocialButton>
								<Icon
									href="https://www.instagram.com/_lal._.jr_/"
									target="_blank"
									rel="noreferrer"
								>
									<Span></Span>
								</Icon>
							</SocialButton>
							<SocialButton>
								<Icon
									href="https://www.linkedin.com/in/laljr-harish/"
									target="_blank"
									rel="noreferrer"
								>
									<Span></Span>
								</Icon>
							</SocialButton>
							<SocialButton>
								<Icon
									href="https://github.com/Lal-Jr"
									target="_blank"
									rel="noreferrer"
								>
									<Span></Span>
								</Icon>
							</SocialButton>
							<SocialButton>
								<Icon
									href="https://twitter.com/LalJr_Harish"
									target="_blank"
									rel="noreferrer"
								>
									<Span></Span>
								</Icon>
							</SocialButton>
						</SocialMediaIconWrapper>
					</HeroTextWrapper>
				</HeroRow>
			</HeroContainer>
		</>
	);
};
export default HeroSection;
