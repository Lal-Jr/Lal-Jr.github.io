import styled, { keyframes } from "styled-components";

const move = keyframes`
    0% {
        left: 0;
        opacity: 0;
    }

    35% {
        left: 41%;
        transform: rotate(0deg);
        opacity: 1;
    }

    65% {
        left: 59%;
        transform: rotate(0deg);
        opacity: 1;
    }

    100% {
        left: 100%;
        transform: rotate(-180deg);
        opacity: 0;
    }
`;

export const LoaderContainer = styled.div`
  height: 100vh;
  background: #090a0f;
  overflow: hidden;
`;

export const Load = styled.div`
  position: absolute;
  width: 600px;
  height: 36px;
  left: 50%;
  top: 40%;
  margin-left: -300px;
  overflow: visible;
  user-select: none;
  cursor: default;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Letter = styled.div`
  position: absolute;
  width: 20px;
  height: 3px;
  opacity: 0;
  animation: ${move} 2s linear infinite;
  transform: rotate(180deg);
  color: #46caca;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
  }

  &:nth-child(5) {
    animation-delay: 0.8s;
  }

  &:nth-child(6) {
    animation-delay: 1s;
  }

  &:nth-child(7) {
    animation-delay: 1.2s;
  }
`;
