import styled from 'styled-components';

export const AboutContainer = styled.div`
    padding: 0px 0px 50px 0px;
    box-shadow: 15px 0px 30px 0.5px rgba(127, 137, 161, 0.25);
    clip-path: inset(0px 0px -15px 0px);
    color: #0a192f ;
    height: 100vh;
`
export const AboutRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
    justify-content: start;
    height: 100%;
`

export const AboutColumn = styled.div`
    margin-left: 50px;
    padding: 10px 0px 0px 175px;
`

export const Title = styled.h1`
    text-align: center;
    padding: 50px 0px 20px 0px;
    font-size: 36px;
    color: #283d50;
    font-weight: 500;
`
export const SubText = styled.p`
    margin: 0px 175px 0px 175px;
    padding: 0px 75px 10px 75px;
    line-height: 1.6;
    justify-content: center;
    align-items: start;
`
export const IconWrapper = styled.div`
    margin: 7px 0px 0px 5px;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    padding: 7px;
    background: #fff;
    border: 2px solid #007bff;
    color: #007bff;
    align-items: flex-start;
    justify-content: center;
    

    &:hover {
        color: #fff;
        border: 2px solid #007bff;
        background: #007bff;
        transitions: ease-in 1s;
    }
`
export const IconTitle = styled.h4`
    align-items: flex-end;
    color: #283d50;
    margin-left: 15px;
`
export const IconSubtitle = styled.p`
    align-items: flex-end;
    line-height: 24px;
    font-size: 14px;
    margin-left: 15px;
    padding-top: 5px;
}
`
export const ImageWrapper = styled.image`
    justify-content: start;
    align-items: center;
    padding-left: 50px;
`

export const Box = styled.image`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 0px;
    justify-content: start;
    align=content: center;
    padding-bottom: 20px;
`
export const Minibox = styled.image`
    
`