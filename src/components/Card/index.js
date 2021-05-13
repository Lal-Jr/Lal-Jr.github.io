import React from "react";
import {
	CardContainer,
	ImageContainer,
	CardContent,
	CardTitle,
	Button,
	ContentWrapper,
	ButtonWrapper,
} from "./Card.styles.jsx";

const Card = ({ title, img }) => {
	return (
		<>
			<CardContainer>
				<ContentWrapper>
					<ImageContainer>
						<img src={img} alt="img" />
					</ImageContainer>
					<CardContent>
						<CardTitle> {title} </CardTitle>
						<ButtonWrapper>
							<Button> Live </Button>
							<Button> Source Code </Button>
						</ButtonWrapper>
					</CardContent>
				</ContentWrapper>
			</CardContainer>
		</>
	);
};

export default Card;
