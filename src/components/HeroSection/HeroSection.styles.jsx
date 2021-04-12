import styled from 'styled-components';
// import background from '../../images/intro-bg.png';

export const HeroContainer = styled.div`
    background-color: #3e5e5d;
    color: #000;
    padding: 160px;
    height: 100vh;
`

export const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

`

export const HeroTextWrapper = styled.div`
    @media screen and(max - width: 768px){
        padding-bottom: 65px;
    }
`

export const Title = styled.h1`
    color: #000;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    letter-spacing: 2px;
    padding: 5px 20px 5px 20px;
    align-items: flex-start;
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 0px 0px 20px;
`

export const Divider = styled.div`
    width: 20px;
    height:auto;
    display:inline-block;
`

export const HeroImageWrapper = styled.div`
    max-width: 95%;
    padding-right: 0;
    margin: 0 0 0 10px;
`