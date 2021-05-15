import React, { useState } from "react";

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
        alert("Your message has been submitted");
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
            </Content>
        <Form className="form" onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label>Name</Label>

          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label>Name</Label>

          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label>Name</Label>

          <Button
            type="submit"
            style={{ background: loader ? "#ccc" : "#000" }}
          >
            Submit
          </Button>
        </Form>
        </Content>
      </ContactContainer>
    </>
  );
};

export default ContactSection;

</Content>