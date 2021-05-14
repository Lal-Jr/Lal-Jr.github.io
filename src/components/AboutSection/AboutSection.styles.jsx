import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;

  @media (max-width: 1150px) {
    height: 110vh;
  }

  @media (max-width: 768px) {
    height: 130vh;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding: 100px 0px 20px 0px;
  font-size: 40px;
  color: #46caca;
  text-transform: uppercase;
`;
export const SubText = styled.p`
  margin: 0px 8vw;
  line-height: 1.6;
  justify-content: center;
  align-items: start;
  color: #fff;
`;
