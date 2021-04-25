import React from 'react';
import { ContactContainer, Title, Content} from './ContactSection.styles.jsx';

function ContactSection()
{
    return (
        <>
            <ContactContainer id='contact'>
                <Title>
                    Contact Me
                </Title>
                <Content>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Content>
            </ContactContainer>
        </>
    );
}

export default ContactSection;