import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
	const [visible, setVisible] = useState(false);
	function Para() {
		return (
			<p id="para">
				Hello, I've learnt to use the full-stack evaluation tool. This makes me
				so happy
			</p>
		);
	}

	const handleClick = () => {
		setVisible({ visible: true });
		console.log(visible);
	};

	return (
		<div id="main">
			{visible ? <Para /> : null}
			<button id="click" onClick={handleClick}>
				show
			</button>
		</div>
	);
}

export default App;
