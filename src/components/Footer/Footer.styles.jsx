import styled from "styled-components";

export const FooterContainer = styled.div`
  background: rgba(30, 30, 30, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 15vh;
  position: sticky;
  bottom: 0;
  width: 100vw;
  padding-top: 7vh;
  border-top: 1px solid #46caca;
`;

export const Para = styled.p`
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
  justify-content: center;
`;
