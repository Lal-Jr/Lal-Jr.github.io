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
          Hey, I'm <big>Harish Lal</big> and I'm <big>Web Developer</big> who
          loves to build things. I am a <big>Full-time student</big> pursuing
          B.Tech in Electrical and Electronics Engineering (EEE) from Government
          Engineering College,Barton Hill. My Love for Web Development started
          during Pandemic and I always give 100% when I start to like anything
          so I during 2020 I started learning HTML, CSS and JS. By the end of
          2020, learned enough so as to be said as a Frontend Developer and
          started doing projects. Starting of 2021, gave me few oppurtunities to
          work as a freelance developer and improve my skills and get an idea of
          what I can achieve if I work hard. Long story short I am budding
          developer who is trying to evolve as time goes by.
          <br /> <big>These as few of the skills I'm good at.</big>
          <br />
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
