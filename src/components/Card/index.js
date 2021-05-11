import React from 'react';
import { CardContainer, ImageContainer, CardContent, CardTitle} from './Card.styles.jsx';
import portfolio from "../../assests/Images/Portfolio.png";

function Card({title,img}) {
    return (
        <>
            <CardContainer>
                <ImageContainer>
                    <img src={portfolio} alt='img' />
                </ImageContainer>
                <CardContent>
                    <CardTitle> {title} </CardTitle>
                </CardContent>
            </CardContainer>
        </>
    )
}

export default Card;