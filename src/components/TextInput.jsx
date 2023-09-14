import { useState } from "react";

import React from 'react'

const TextInput = () => {

	const [inputValue, setInputValue] = useState("");
	const [clickedValue, setClickedValue] = useState("");

	const changeInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const handleClick = () => {
		setClickedValue(inputValue);
	};

	return (
		<>
			<div>TextInput</div>
			<label htmlFor="input">Input</label>
			<input onChange={(e) => changeInputValue(e)} type="text" name="input" id="input" value={inputValue} />
			<button onClick={handleClick}>{clickedValue}</button>
		</>
	)
}

export default TextInput