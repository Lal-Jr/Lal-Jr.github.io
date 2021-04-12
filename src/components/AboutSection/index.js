import React from 'react';
import { AboutContainer, AboutRow, AboutColumn, Title, SubText, IconTitle, IconSubtitle, IconWrapper, ImageWrapper, Box, Minibox} from './AboutSection.styles.jsx';
import { GiCutDiamond } from 'react-icons/gi';
import { FaRegImage, FaLayerGroup } from 'react-icons/fa';

function AboutSection()
{
    return (
        <>
            <AboutContainer>
                <Title>
                    About Us
                </Title>
                <SubText>
                    The IEEE student branch of Mar Baselios College of Engineering & Technology was established on February 14, 2006 by Dr G Vijayaraghavan, former Chairperson of IEEE Kerala Section and Founder & CEO of Technopark, Trivandrum.
                    IEEE MBCET falls under IEEE Kerala Section which is a part of the IEEE India Council which falls under Region 10 (Asia Pacific & Australia) of the global IEEE geography. We started our journey with 52 members and in 2008 it reached 103.
                    Society chapters are bodies that work for the advancements of one particular field of technology.
                </SubText>
                <SubText>
                    Here are some of the amazing things that makes us special :
                </SubText>
                <AboutRow>
                    <AboutColumn>
                        <Box>
                            <IconWrapper>
                                < GiCutDiamond />
                            </IconWrapper>
                            <Minibox>
                                <IconTitle>
                                    Global Community
                                </IconTitle>
                                <IconSubtitle>
                                    IEEE is a global community having more than 400,000 members across the world
                            </IconSubtitle>
                            </Minibox>
                        </Box>
                        <Box>
                            <IconWrapper>
                                < FaRegImage />
                            </IconWrapper>
                            <Minibox>
                                <IconTitle>
                                    Unlimited Opportunities
                                </IconTitle>
                                <IconSubtitle>
                                    As an IEEE member, you will have the best opportunities to move ahead in your career
                                </IconSubtitle>
                            </Minibox>
                        </Box>
                        <Box>
                            <IconWrapper>
                                < FaLayerGroup />
                            </IconWrapper>
                            <Minibox>
                                <IconTitle>
                                    Amazing Resources
                                </IconTitle>
                                <IconSubtitle>
                                    Millions of resources will be made available at your disposal, along with exclusively curated contents
                                </IconSubtitle>
                            </Minibox>
                        </Box>
                    </AboutColumn>
                    <AboutColumn>
                        <ImageWrapper>
                            {/* <img src={image} alt='ieeembcet'/> */}
                        </ImageWrapper>
                    </AboutColumn>
                </AboutRow>
            </AboutContainer>
        </>
    );
}

export default AboutSection;