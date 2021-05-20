import { Link } from "react-scroll";
import styled from "styled-components";

export const NavBar = styled.div`
  background: rgba(30, 30, 30, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 80px;
  visibility: ${({ scrollNav }) => (scrollNav ? "visible" : "hidden")};
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100vw;
  transition: all 0.1s ease-in-out;
  border-bottom: solid 0.25vh #46caca;
  overflow: hidden;
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  text-align: center;
  width: 90vw;
  justify-content: end;
  align-items: center;
  margin-right: 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLogo = styled.h1`
  display: block;
  color: #fff;
  cursor: pointer;
  margin-left: 4rem;
  margin-top: 1.5rem;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    margin: 0;
    transform: translate(20%, 25%);
    font-size: 1.5rem;
  }
`;

export const NavItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #46caca;
  }
`;
