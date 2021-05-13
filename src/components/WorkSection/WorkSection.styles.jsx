import styled from 'styled-components';

export const WorkContainer = styled.div`
	height: 100vh;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;
	padding: 0 10vw;

	@media (max-width: 768px) {
		height: 250vh;
	}
`;

export const Title = styled.h1`
    text-align: center;
    padding: 12vh 0px 1vh 0px;
    font-size: 40px;
    color: #46caca;
    font-weight: bold;
    text-transform: uppercase;
`
export const Content = styled.div`
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;

    @media (max-width:768px) {
        flex-direction: column;
    }
`

export const Divider = styled.div`
	height: 1.5vh;
	display: inline-block;

	@media (max-width: 768px) {
		display: none;
	}
`;