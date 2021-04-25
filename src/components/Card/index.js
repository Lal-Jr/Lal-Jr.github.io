import React from 'react';
import { CardContainer, ImageContainer, CardContent, CardTitle, CardBody } from './Card.styles.jsx';

function Card({title,img,body}) {
    return (
        <>
            <CardContainer>
                <ImageContainer>
                    <img src={img} alt='' />
                </ImageContainer>
                <CardContent>
                    <CardTitle> {title} </CardTitle>
                    <CardBody> {body} </CardBody>
                </CardContent>
            </CardContainer>
        </>
    )
}

export default Card;