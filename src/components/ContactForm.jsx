
import { useState } from "react";

function ContactForm() {

	const [name, setName] = useState("No name yet");
	const [email, setEmail] = useState("No email yet");
	const [message, setMessage] = useState("No message yet");

	function createMessage() {

	}

	return (
		<>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Message: {message}</p>
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" />
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />
				<label htmlFor="message">Message</label>
				<input type="text" name="message" id="message" />
				<button onClick={() => createMessage()}>Submit</button>
			</form>
		</>
	)

}

export default ContactForm;