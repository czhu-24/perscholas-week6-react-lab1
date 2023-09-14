import { useState } from "react";

function ContactForm() {
	const [name, setName] = useState("No name yet");
	const [email, setEmail] = useState("No email yet");
	const [message, setMessage] = useState("No message yet");

	const [submittedMessage, setSubmittedMessage] = useState("");

	const submitForm = (e) => {
		e.preventDefault();

		// build the message and update it when the form is submitted
		const messageText = `Hello, ${name}, your email is ${email} and your message is ${message}`;

		// only change submitted message on form submission
		setSubmittedMessage(messageText);
	};

	const changeName = (e) => {
		setName(e.target.value);
	};

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changeMessage = (e) => {
		setMessage(e.target.value);
	};

	return (
		<> {/* submittedMessage is "" which is falsy at first */}
			<div>
				{submittedMessage ?
					<p>{submittedMessage}</p>
					:
					<p>Please submit your response</p>
				}
			</div>
			<form onSubmit={(e) => submitForm(e)}>
				<label htmlFor="name">Name</label>
				<input
					onChange={(e) => changeName(e)}
					value={name}
					type="text"
					name="name"
					id="name"
				/>
				<label htmlFor="email">Email</label>
				<input
					onChange={(e) => changeEmail(e)}
					value={email}
					type="email"
					name="email"
					id="email"
				/>
				<label htmlFor="message">Message</label>
				<input
					onChange={(e) => changeMessage(e)}
					value={message}
					type="text"
					name="message"
					id="message"
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default ContactForm;
