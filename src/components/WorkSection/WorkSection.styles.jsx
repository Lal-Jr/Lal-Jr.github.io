import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  padding: 0 10vw;

  @media (max-width: 1150px) {
    height: 150vh;
  }

  @media (max-width: 768px) {
    height: 200vh;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding: 12vh 0px 1vh 0px;
  font-size: 40px;
  color: #46caca;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-items: center;

  @media (max-width: 1150px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 6vh;
  }
`;

export const Divider = styled.div`
  height: 1.5vh;
  display: inline-block;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1150px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
