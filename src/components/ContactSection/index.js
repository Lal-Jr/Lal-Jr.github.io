import React, { useState } from "react";
import {
  ContactContainer,
  Title,
  Content,
  Button,
  Label,
  Input,
  Form,
  FormField,
} from "./ContactSection.styles.jsx";
import { db } from "../../assests/firebase.js";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert(
          "Your message has been submitted and I will get back to you as soon as possible"
        );
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <ContactContainer id="contact">
        <Title>Contact Us</Title>
        <Content>
          <Form className="form" onSubmit={handleSubmit} autoComplete="off">
            <FormField>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Label>Name</Label>
            </FormField>
            <FormField>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <Label>Email</Label>
            </FormField>
            <FormField>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Label>Message</Label>
            </FormField>
            <FormField>
              <Button
                type="submit"
                style={{ background: loader ? "#ccc" : "#000" }}
              >
                Submit
              </Button>
            </FormField>
          </Form>
        </Content>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
