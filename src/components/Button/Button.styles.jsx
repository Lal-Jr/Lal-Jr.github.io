import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
    background: transparent;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1.5px;
    text-decoration: none;
    border: 2px solid #fff;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    border-radius: 50px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #46caca;
        color: #fff;
        border: 2px solid #46caca;
    }
`;
