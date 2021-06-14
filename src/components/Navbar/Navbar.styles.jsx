import { Link } from "react-scroll";
import styled from "styled-components";

export const NavBar = styled.div`
  background: rgba(30, 30, 30, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 80px;
  visibility: ${({ scrollNav }) => (scrollNav ? "visible" : "hidden")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  transition: all 0.1s ease-in-out;
  border-bottom: solid 0.25vh #46caca;
  z-index: 998;

  @media (max-width: 425px) {
    height: 60px;
  }
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

export const NavLogo = styled.h1`
  display: block;
  color: #fff;
  cursor: pointer;
  margin-left: 4rem;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    margin: 0;
    transform: translate(20%, 20%);
    font-size: 1.5rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  margin-right: 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  padding-inline: 15px;

  &:hover {
    color: #46caca;
  }
`;
