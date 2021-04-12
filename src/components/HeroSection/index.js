import React from 'react';
import { HeroContainer, HeroRow, HeroTextWrapper, Title, ButtonWrapper, Divider, HeroImageWrapper } from './HeroSection.styles.jsx';
import { Button } from '../Button/Button.styles.jsx';

function HeroSection()
{
    return (
        <>
            <HeroContainer>
                <HeroRow>
                    <HeroTextWrapper>
                        <Title>Redefining your</Title> 
                        <Title>career ahead!</Title>
                        <ButtonWrapper>
                            <Button to='/upcomingevents'>Upcoming Events</Button>
                            <Divider />
                            <Button to='/stories'>Sneak Peak</Button>
                        </ButtonWrapper>
                    </HeroTextWrapper>
                    <HeroImageWrapper>
                        {/* <img src={image} alt='hero-img'/> */}
                    </HeroImageWrapper>
                </HeroRow>
            </HeroContainer>
        </>
    );
}
export default HeroSection;