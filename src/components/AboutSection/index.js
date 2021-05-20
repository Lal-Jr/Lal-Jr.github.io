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
          Hey, I'm <strong>Harish Lal</strong> and I'm
          <strong> Self Taught Web Developer</strong> who loves to build things
          that inspire others. I am currently pursuing <strong>B.Tech </strong>
          in Electrical and Electronics Engineering from Government Engineering
          College, Barton Hill.
          <br /> I have being practicing Web Development for past year and half
          but my love for programming started as early as when I was a small boy
          who just learned what a computer does. So, Yeah! we both have a long
          history together.
          <br /> <strong>These as few of the skills I'm good at.</strong>
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
