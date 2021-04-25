import React from 'react';
import { ContactContainer, Title, Content, Button, Label, Input, Para, Form, FormField } from './ContactSection.styles.jsx';

function ContactSection()
{
    return (
        <>
            <ContactContainer id='contact'>
                <Title>
                    Contact
                </Title>
                <Content class="contact-form row">
                    <Form>
                        <FormField class="form-field">
                            <Input id="name" class="input-text js-input" type="text" required /> 
                                <Label class="label" for="name">Name</Label>
                        </FormField>
                        <FormField class="form-field">
                            <Input id="email" class="input-text js-input" type="email" required />
                                <Label class="label" for="email">E-mail</Label>
                        </FormField>
                        <FormField class="form-field">
                            <Input id="message" class="input-text js-input" type="text" required />
                                <Label class="label" for="message">Message</Label>
                        </FormField>
                        <FormField class="form-field">
                            <Button class="submit">
                                SUBMIT 
                            </Button>
                        </FormField>
                    </Form>
                    <Para>HARISH LAL © 2021</Para>
                </Content>
            </ContactContainer>
        </>
    );
}

export default ContactSection;



