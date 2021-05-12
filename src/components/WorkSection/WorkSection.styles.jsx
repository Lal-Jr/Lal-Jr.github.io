import styled from 'styled-components';

export const WorkContainer = styled.div`
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
`

export const Title = styled.h1`
    text-align: center;
    padding: 100px 0px 20px 0px;
    font-size: 40px;
    color: #46caca;
    font-weight: bold;
    text-transform: uppercase;
`
export const Content = styled.div`
    margin: 0px 150px;
    padding: 0px 50px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;
`

export const Divider = styled.div`
    width: auto;
    height: 20px;
    display:inline-block;
`