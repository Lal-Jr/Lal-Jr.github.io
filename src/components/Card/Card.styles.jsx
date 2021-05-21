import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  background: rgba(30, 30, 30, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 1vh;
  height: 38vh;
  width: 66vh;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 30vh;
    width: max(95%, 40vh);
  }

  @media (max-width: 425px) {
    height: 28vh;
    width: max(90%, 38vh);
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 25vh;
  width: 50vh;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: 17vh;
    width: 34vh;
  }
`;

export const CardContent = styled.div`
  color: #46caca;
  text-align: center;
`;

export const CardTitle = styled.h2`
  margin: 1vh 0;
  padding: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: 0 2.5vh;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const ContentWrapper = styled.div`
  margin: auto;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;
