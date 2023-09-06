import { useState } from "react";


function ColorChanger() {

	const [backgroundColor, setBackgroundColor] = useState('black');

	function setColor() {
		const colors = ["black", "red", "blue", "yellow", "orange", "purple"];
		const randomInt = Math.floor(Math.random() * 6); // num btwn 0 & 5

		setBackgroundColor(colors[randomInt]);
	}

	return (
		<> {/* testing comments. why the two curly brackets... ? */}
			<p className="color" style={{ backgroundColor: backgroundColor }}>This p tag's color will change</p >
			<button onClick={() => setColor()}>Change Color</button>
		</>
	)
}

export default ColorChanger;