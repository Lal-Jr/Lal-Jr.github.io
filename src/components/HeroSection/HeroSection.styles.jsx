import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../../App.css";

export const HeroContainer = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;

//Main Text
export const HeroRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-inline: auto;
  width: min(90%, 70.5rem);
`;

export const HeroTextWrapper = styled.div``;

export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 5px 10px;
  align-text: center;
  z-index: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    font-weight: 500;
  }
`;

export const Highlight = styled(LinkS)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.5px;
  display: inline-block;
  padding: 0px 10px;

  &:hover {
    -webkit-text-fill-color: #46caca;
    -webkit-text-stroke-width: 0px;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    -webkit-text-stroke-width: 0.5px;
  }
`;

//Social Media Icons
export const SocialMediaIconWrapper = styled.ul`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;

  @media (max-width: 768px) {
    margin-inline: auto;
    bottom: 1rem;
    left: 50%;
    text-align: center;
  }
`;

export const Icon = styled.a`
  width: 50px;
  height: 50px;
  display: block;
  transition: 0.5s;
  background: #ccc;
`;

export const Span = styled.span`
  font-weight: bold;
  width: 100%;
  height: 100%;

  &:before {
    font-family: fontAwesome;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    color: #262626;
    font-size: 30px;
    transform-origin: top;
    transition: transform 0.5s;
  }

  &:after {
    font-family: fontAwesome;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    color: #262626;
    font-size: 30px;
    transform-origin: bottom;
    transition: transform 0.5s;
    transform: rotateX(90deg) translateY(50%);
  }
`;

export const SocialButton = styled.li`
  list-style: none;
  position: relative;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin-inline: auto;
    left: -50%;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 50px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    transition: 0.5s;
    opacity: 0;
    filter: blur(2px);
    transform: scale(0.8);
  }

  &:hover {
    &:before {
      transition-delay: 0.2s;
      opacity: 0.2;
      transform: scale(1);
    }
    ${Icon} {
      transform: translateY(-10px);
    }
    ${Span} {
      &:before {
        transform: rotateX(90deg) translateY(-50%);
      }
      &:after {
        transform: rotateX(0deg) translateY(0);
      }
    }
  }
  &:nth-child(1) {
    ${Span} {
      &:before {
        content: "\f16d";
      }
      &:after {
        background: #c13584;
        color: #fff;
        content: "\f16d";
      }
    }
  }
  &:nth-child(2) {
    ${Span} {
      &:before {
        content: "\f0e1";
      }
      &:after {
        background: #0077b5;
        color: #fff;
        content: "\f0e1";
      }
    }
  }
  &:nth-child(3) {
    ${Span} {
      &:before {
        content: "\f09b";
      }
      &:after {
        background: #212529;
        color: #fff;
        content: "\f09b";
      }
    }
  }
  &:nth-child(4) {
    ${Span} {
      &:before {
        content: "\f099";
      }
      &:after {
        background: #55acee;
        color: #fff;
        content: "\f099";
      }
    }
  }
`;

// Resume Button
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Arrow = styled(AiOutlineArrowRight)`
  margin-left: 5px;
`;

export const Resume = styled(LinkR)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background: transparent;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  border: 2px solid #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #46caca;
    color: #fff;
    border: 2px solid #46caca;
    ${Arrow} {
      transform: translateX(5px);
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 425px) {
    padding: 3px 8px;
    font-size: 12px;
    right: 1rem;
    top: 1rem;
  }
`;
