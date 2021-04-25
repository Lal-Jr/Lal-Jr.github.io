import styled from 'styled-components';

export const CardContainer = styled.div`
    display: block;
    width: 350px;
    height: 250px;
    transition: all .3s ease-in-out;
    background: rgba(255,255,255,0.25);
    box-shadow: 0 8px 32px 0 rgba(31,31,135,0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.18);

    &:hover{
    transform: scale(1.02);
    }
`

export const ImageContainer = styled.image`
    overflow:  hidden;
    height: 200px;
`

export const CardContent = styled.div`
    margin: 1rem;
    color: #46caca;
`

export const CardTitle = styled.h2`
    cursor: pointer;
`

export const CardBody = styled.p``