import React from 'react';
import { HeroContainer, HeroRow, HeroTextWrapper, ButtonWrapper, Title, Highlight } from './HeroSection.styles.jsx';
import { Button } from '../Button/Button.styles.jsx';
import { AiOutlineArrowRight } from 'react-icons/ai';

function HeroSection()
{
    return (
        <>
            <HeroContainer>
                <HeroRow>
                    <HeroTextWrapper>
                        <Title>Hello, I'm <Highlight>Harish Lal</Highlight>.</Title>
                        <Title>I'm a <Highlight>Front-End</Highlight> Developer.</Title>
                        <ButtonWrapper>
                            <Button to='/works'>View my work<AiOutlineArrowRight /> </Button>
                        </ButtonWrapper>
                    </HeroTextWrapper>
                </HeroRow>
            </HeroContainer>
        </>
    );
}
export default HeroSection; 