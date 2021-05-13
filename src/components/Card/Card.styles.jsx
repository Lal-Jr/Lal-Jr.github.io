import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  background: rgba(30, 30, 30, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 1vh;
  height: 38vh;
  width: 53vh;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 25vh;
  width: 50vh;
  display: flex;
  justify-content: center;
  padding: 1.5vh;
`;

export const CardContent = styled.div`
  color: #46caca;
  text-align: center;
`;

export const CardTitle = styled.h2`
  margin: 10px 0;
  padding: 0;
  color: #fff;
`;

export const Button = styled.a`
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin: 10px;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-evenly;
`;
