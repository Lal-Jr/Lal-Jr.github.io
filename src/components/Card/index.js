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

const Card = ({ title, img, liveURL, sourceURL }) => {
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
              <Button href={liveURL} target="_blank" rel="noreferrer">
                Live App
              </Button>
              <Button href={sourceURL} target="_blank" rel="noreferrer">
                Source Code
              </Button>
            </ButtonWrapper>
          </CardContent>
        </ContentWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
