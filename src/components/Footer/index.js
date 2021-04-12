import React from 'react';
import { FooterContainer, FooterRow, FooterLinkWrapper, FooterLinkItems, SocialMediaWrapper, FooterLogo, SocialIcons, SocialIconsLink, Home, About, Team, Gallery, Events, FooterTitle, FooterSubText } from './Footer.styles.jsx';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';


function Footer() {
    return (
        <FooterContainer>
            <FooterRow>
                <FooterLinkWrapper>
                    <h2>Useful Link</h2>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <Home to='/'>Home</Home>
                        <About to='/'>About Us</About>
                        <Events to='/'>Events</Events>
                        <Gallery to='/'>Gallery</Gallery>
                        <Team to='/'>Team</Team>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterRow>
            <FooterRow>
                <FooterLinkWrapper>
                    <h2>Contact Us</h2>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <p>MBCET</p>
                        <p>Nalanchira PO, 695015</p>
                        <p>Trivandrum, Kerala, India</p>
                        <p><strong>Phone:</strong> +91 8086010528 (Chair Person)</p>
                        <p><strong>Email:</strong> ieeesb@mbcet.ac.in</p>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterRow>
            <FooterRow>
                <FooterLinkItems>
                    <FooterTitle>IEEE MBCET</FooterTitle>
                    <FooterSubText>IEEE is the world's largest technical professional organization dedicated to</FooterSubText>
                    <FooterSubText>advancing technology for the benefit of humanity.</FooterSubText>
                    <FooterLogo>
                        {/* <a href='https://mbcet.ac.in/' target='_blank' rel="noreferrer">
                            <img src={logo} alt="Logo" />
                        </a> */}
                    </FooterLogo>
                    <SocialMediaWrapper>
                        <SocialIcons>
                            <SocialIconsLink>
                                <a href='https://www.facebook.com/ieee.mbcet/' target='_blank' rel="noreferrer" aria-label="facebook">
                                    <FaFacebook />
                                </a>
                            </SocialIconsLink>
                            <SocialIconsLink>
                                <a href='https://www.instagram.com/ieeesbmbcet/' target='_blank' rel="noreferrer">
                                    <FaInstagram />
                                </a>
                            </SocialIconsLink>
                            <SocialIconsLink>
                                <a href='https://www.instagram.com/ieeesbmbcet/' target='_blank' rel="noreferrer">
                                    <FaTwitter />
                                </a>
                            </SocialIconsLink>
                            <SocialIconsLink>
                                <a href='https://www.linkedin.com/company/ieee-sb-mbcet/' target='_blank' rel="noreferrer">
                                    <FaLinkedin />
                                </a>
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </FooterLinkItems>
            </FooterRow>
        </FooterContainer>
    );
}

export default Footer;