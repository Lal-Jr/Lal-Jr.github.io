import React from 'react';
import { ContactContainer, Title, Content} from './ContactSection.styles.jsx';

function ContactSection()
{
    return (
        <>
            <ContactContainer id='contact'>
                <Title>
                    Contact
                </Title>
                <Content>
                    <form class="contact-form row">
                        <div class="form-field col x-50">
                            <input id="name" class="input-text js-input" type="text" required /> 
                                <label class="label" for="name">Name</label>
                        </div>
                        <div class="form-field col x-50">
                            <input id="email" class="input-text js-input" type="email" required />
                                <label class="label" for="email">E-mail</label>
                        </div>
                        <div class="form-field col x-100">
                            <input id="message" class="input-text js-input" type="text" required />
                                <label class="label" for="message">Message</label>
                        </div>
                        <div class="form-field col x-100 align-center">
                            <input class="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>
                    <p class="note">HARISH LAL © 2021</p>
                </Content>
            </ContactContainer>
        </>
    );
}

export default ContactSection;



