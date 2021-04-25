import React from 'react';
import { HeroContainer, HeroRow, HeroTextWrapper, ButtonWrapper, Title, Highlight, SocialMediaIconWrapper, SocialButton, Icon, FaI, FaT, FaG, FaL, Span, Resume, Arrow } from './HeroSection.styles.jsx';
import { Stars, Stars2, Stars3 } from '../../assests/Animation.jsx'
import pdf from '../../assests/Resume.pdf';

function HeroSection()
{   
    return (
        <>  
            <HeroContainer id='home'>
                <Stars />
                <Stars2 />
                <Stars3 />
                <HeroRow>
                    <HeroTextWrapper>
                        <Title>Hello, I'm 
                            <Highlight
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={800}
                            >
                                Harish Lal
                            </Highlight>
                              .
                        </Title>
                        <Title>I'm a 
                            <Highlight
                                activeClass='active'
                                to='work'
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
                            <Resume to={pdf} target="_blank">My Resume
                                    <Arrow />
                            </Resume>
                        </ButtonWrapper>
                        <SocialMediaIconWrapper>
                            <SocialButton>
                                <Icon> <FaI /> </Icon>
                                <Span>Instagram</Span>
                            </SocialButton>
                            <SocialButton>
                                <Icon> <FaT /> </Icon>
                                <Span>Twitter</Span>
                            </SocialButton>
                            <SocialButton>
                                <Icon> <FaG /> </Icon>
                                <Span>Github</Span>
                            </SocialButton>
                            <SocialButton>
                                <Icon> <FaL /> </Icon>
                                <Span>Linkedin</Span>
                            </SocialButton>
                        </SocialMediaIconWrapper>
                    </HeroTextWrapper>
                </HeroRow>
            </HeroContainer>
        </>
    );
}
export default HeroSection; 