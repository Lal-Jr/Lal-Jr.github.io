import styled from 'styled-components';
// import background from '../../images/background.jpg';

export const HeroContainer = styled.div`
    
    background-repeat: no-repeat;
    background-size: 1920px 980px;
    height: 100vh;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
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
    padding: 20px 0px 0px 20px;
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