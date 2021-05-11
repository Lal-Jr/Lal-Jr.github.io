import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
`

export const Title = styled.h1`
    text-align: center;
    padding: 100px 0px 20px 0px;
    font-size: 40px;
    color: #46caca;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 48px;
    padding-bottom: 48px;
`
export const Content = styled.div`
    margin: 0px 150px 300px;
    padding: 0px 50px;
    line-height: 1.6;
    justify-content: center;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
    margin: 0px 500px;
`

export const FormField = styled.div.attrs({
    className: "input-text js-input"
})`
    position: relative;
    margin: 32px 0;
`

export const Label = styled.label.attrs({
    className: "label"
})`
    position: absolute;
    left: 20px;
    bottom: 11px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #46caca;
    cursor: text;
    transform .2s ease -in -out;
`

export const Button = styled.button.attrs({
    className: "submit",
    type:"submit",
    value:"Submit"
})`
    display: inline-block;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
`

export const Input = styled.input.attrs({
    className: "input-text js-input"
})`
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
        +${Label} {
            transform: translateY(-24px);
        }
      }
`