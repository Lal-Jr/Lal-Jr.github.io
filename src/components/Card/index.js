import React from 'react';
import { CardContainer, ImageContainer, CardContent, CardTitle, Button} from './Card.styles.jsx';

const Card = ({ title, img, link }) => {
	return (
		<>
			<CardContainer>
				<ImageContainer>
					<img src={img} alt="img" />
				</ImageContainer>
				<CardContent>
					<CardTitle> {title} </CardTitle>
					{/* <Button href="https://lal-jr.github.io/pizza-landing"> View App</Button> */}
				</CardContent>
			</CardContainer>
		</>
	);
};

export default Card;