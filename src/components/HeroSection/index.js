import React from 'react';
import { HeroContainer, HeroRow, HeroTextWrapper, ButtonWrapper, Title, Highlight, SocialMediaIconWrapper, SocialButton, Icon, FaI, FaT, FaG, FaL, Span, Resume, Arrow, Button } from './HeroSection.styles.jsx';
import './Animation.jsx';
import pdf from '../../assests/Resume.pdf';

function HeroSection()
{   
    return (
        <>
            <HeroContainer>
                <HeroRow>
                    <HeroTextWrapper>
                        <Title>Hello, I'm <Highlight>Harish Lal</Highlight>.</Title>
                        <Title>I'm a <Highlight>Front-End</Highlight>Web Developer.</Title>
                        <ButtonWrapper>
                            <Resume to={pdf} target="_blank">My Resume
                                    <Arrow />
                            </Resume>
                            <Button to='/'>My Works
                                    <Arrow />
                            </Button>
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