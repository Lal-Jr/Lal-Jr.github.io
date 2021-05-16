import styled from "styled-components";

export const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
`;

export const BarDone = styled.div`
  background: linear-gradient(to right, #00ffff, #00ced1);
  border-shadow: 0 3px 3px -5px #00ced1, 0 2px 5px #00ced1;
  border-radius: 20px;
  color: #3a3b3c;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`;

export const Name = styled.div``;
