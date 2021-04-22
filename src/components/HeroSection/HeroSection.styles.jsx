import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


export const HeroContainer = styled.div`
    height: 100vh;    
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
    font-family: 'Spartan', sans-serif;
    font-weight: 900px;
    letter-spacing: 1.5px;
    padding: 5px 20px 5px 20px;
    align-text: center;
    z-index: 1;
    display: flex;
    justify-content: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Highlight = styled.div`
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
    // display: flex;
    // flex-direction: column;
`

export const SocialButton = styled.div`
    display: inline-block;
    height: 60px;
    width: 60px;
    float: left;
    margin: 5px;
    background: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;
    overflow: hidden;

    &:hover{
        width: 200px;
    }
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
`
export const FaI = styled(FaInstagram)`
    font-size: 25px;
    line-height: 60px;
`
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
    font-size: 20px;
    font-weight: bold;
    // line-height: 60px;
    margin-left: 10px;
    display: inline-flex;
    align-content: center;
`