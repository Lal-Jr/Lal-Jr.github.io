import React from "react";
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

function ContactSection() {
	// $(".js-input").keyup(function () {
	// 	if ($(this).val()) {
	// 		$(this).addClass("not-empty");
	// 	} else {
	// 		$(this).removeClass("not-empty");
	// 	}
	// });
	return (
		<>
			<ContactContainer id="contact">
				<Title>Contact Me</Title>
				<Content className="contact-form row">
					<Form>
						<FormField className="form-field">
							<Input
								id="name"
								className="input-text js-input"
								type="text"
								required
							/>
							<Label className="label" for="name">
								Name
							</Label>
						</FormField>
						<FormField className="form-field">
							<Input
								id="email"
								className="input-text js-input"
								type="email"
								required
							/>
							<Label className="label" for="email">
								E-mail
							</Label>
						</FormField>
						<FormField className="form-field">
							<Input
								id="message"
								className="input-text js-input"
								type="text"
								required
							/>
							<Label className="label" for="message">
								Message
							</Label>
						</FormField>
						<FormField className="form-field">
							<Button className="submit">SUBMIT</Button>
						</FormField>
					</Form>
				</Content>
			</ContactContainer>
		</>
	);
}

export default ContactSection;
