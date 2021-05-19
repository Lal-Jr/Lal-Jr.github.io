import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  padding: 3rem 0;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #46caca;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SubText = styled.p`
  margin-inline: auto;
  width: min(90%, 70.5rem);
  line-height: 1.6;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-inline: auto;
  width: min(90%, 70.5rem);
  justify-content: space-around;
  align-items: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
