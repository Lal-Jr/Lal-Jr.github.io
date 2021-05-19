import React from "react";
import ProgressBar from "../ProgressBar/index.js";
import {
  AboutContainer,
  Title,
  SubText,
  BarWrapper,
  ContentWrapper,
} from "./AboutSection.styles.jsx";
import {
  barEight,
  barFive,
  barFour,
  barOne,
  barSeven,
  barSix,
  barThree,
  barTwo,
} from "../../assests/BarData.js";

function AboutSection() {
  return (
    <>
      <AboutContainer id="about">
        <Title>About</Title>
        <SubText>
          Hey, I'm <big>Harish Lal</big> and I'm
          <big> Self Taught Web Developer</big> who loves to build things that
          inspire others. I am currently pursuing <big>B.Tech</big> in
          Electrical and Electronics Engineering from Government Engineering
          College, Barton Hill.
          <br /> <big>These as few of the skills I'm good at.</big>
        </SubText>
        <ContentWrapper>
          <BarWrapper>
            <ProgressBar {...barOne} />
            <ProgressBar {...barTwo} />
            <ProgressBar {...barThree} />
            <ProgressBar {...barFour} />
          </BarWrapper>
          <BarWrapper>
            <ProgressBar {...barFive} />
            <ProgressBar {...barSix} />
            <ProgressBar {...barSeven} />
            <ProgressBar {...barEight} />
          </BarWrapper>
        </ContentWrapper>
      </AboutContainer>
    </>
  );
}

export default AboutSection;
