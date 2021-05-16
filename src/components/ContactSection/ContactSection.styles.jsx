import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 91vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 20vh 0px 1vh 0px;
  font-size: 40px;
  color: #46caca;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
export const Content = styled.div`
  margin: 5vh 8vw;
  padding: 0px 50px;
  line-height: 1.6;
  justify-content: center;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  margin: 0px 25vw;

  @media (max-width: 1100px) {
    margin: 0px 15vw;
  }

  @media (max-width: 425px) {
    margin: 0px 5vw;
  }
`;

export const FormField = styled.div`
  position: relative;
  margin: 32px 0;
`;

export const Label = styled.label`
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #46caca;
    cursor: text;
    transform .2s ease -in -out;

	@media (max-width: 425px) {
		font-size: 9px;
		left: 2px;
    	bottom: 2px;
	}
`;

export const Button = styled.button`
  display: inline-block;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 0.5vw 1.2vw;
  border: none;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 8px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 46px;
  border-width: 0 0 2px 0;
  border-color: #fff;
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  background: transparent;
  color: #fff;

  &:focus {
    outline: none;
    + ${Label} {
      transform: translateY(-24px);
    }
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
