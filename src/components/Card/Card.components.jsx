import React from "react";
import {
	CardContainer,
	ImageContainer,
	CardContent,
	CardTitle,
	ButtonWrapper,
	Button,
} from "./Card.styles.jsx";

const Card = ({ title, img, liveURL, sourceURL }) => {
	return (
		<>
			<CardContainer>
				<ImageContainer>
					<img src={img} alt="img" />
				</ImageContainer>
				<CardContent>
					<CardTitle> {title} </CardTitle>
					<ButtonWrapper>
						<Button href={sourceURL} target="_blank">
							Source Code
						</Button>
						<Button href={liveURL} target="_blank">
							Live App
						</Button>
					</ButtonWrapper>
				</CardContent>
			</CardContainer>
		</>
	);
};

export default Card;
