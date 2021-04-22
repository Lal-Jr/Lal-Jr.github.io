import React from 'react';
import { HeroContainer, HeroRow, HeroTextWrapper, ButtonWrapper, Title, Highlight, SocialMediaIconWrapper, SocialButton, Icon, FaI, FaT, FaG, FaL, Span } from './HeroSection.styles.jsx';
import { Button } from '../Button/Button.styles.jsx';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './styles.css';
import pdf from './Resume.pdf';

function HeroSection()
{   
    return (
        <>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <HeroContainer>
                <HeroRow>
                    <HeroTextWrapper>
                        <Title>Hello, I'm <Highlight>Harish Lal</Highlight>.</Title>
                        <Title>I'm a <Highlight>Front-End</Highlight>Web Developer.</Title>
                        <ButtonWrapper>
                            <Button to={pdf} target="_blank">My Resume
                                    <AiOutlineArrowRight />
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