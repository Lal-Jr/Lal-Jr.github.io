import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.div`
    background-color: #004a99;
    padding: 4rem 0 6rem 0;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    color: #fff;
`

export const FooterRow = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 1.6;
`

export const FooterLinkWrapper = styled.h4`
    text-align: left;
`

export const FooterLinkItems = styled(LinkS)`
    display: grid;
    grid-template-rows: repeat(5, auto);
    grid-gap: 5px;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 0.5rem;
`

export const FooterTitle = styled.h3`
    text-align: center; 
    font-size: 28px;   
`

export const FooterSubText = styled.p`
    text-align: center;
    justify-content: center;
    align-content: center;
`

export const SocialMedia = styled.div``

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
`

export const FooterLogo = styled.div`
    justify-content: center;
    align=items: center;
    padding-left: 130px;
`

export const SocialIcons = styled.div`
    color: #fff;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    align-content: space-evenly;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 40px;
`

export const SocialIconsLink = styled.div`
    color: #fff;
    transition: transform .2s;
    font-size: 24px;
    align-content: space-evenly;
    justify-content: center;
    text-decoration: none;

    &:hover{
        transform: scale(1.5);
    }
`

export const Home = styled.div`
    cursor: pointer;
    &:hover {
        color: #007bff;
        transition: 0.3s ease-out;
}`

export const About = styled.div`
    cursor: pointer;
    &:hover {
        color: #007bff;
        transition: 0.3s ease-out;
}`

export const Team = styled.div`
    cursor: pointer;
    &:hover {
        color: #007bff;
        transition: 0.3s ease-out;
}`

export const Gallery = styled.div`
    cursor: pointer;
    &:hover {
        color: #007bff;
        transition: 0.3s ease-out;
}`

export const Events = styled.div`
    cursor: pointer;
    &:hover {
        color: #007bff;
        transition: 0.3s ease-out;
}`