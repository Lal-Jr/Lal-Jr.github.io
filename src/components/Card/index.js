import React from 'react';
import { CardContainer, ImageContainer, CardContent, CardTitle} from './Card.styles.jsx';

const Card = ({ title, img, link }) => {
	return (
		<>
			<CardContainer>
				<ImageContainer>
					<img src={img} alt="img" />
				</ImageContainer>
				<CardContent>
					<CardTitle> {title} </CardTitle>
				</CardContent>
			</CardContainer>
		</>
	);
};

export default Card;