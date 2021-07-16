import { useEffect, useRef, useState } from "react";

const ChatFieldBar = (props) => {
	const chatField = useRef("");
	// const [emoji, setEmoji] = useState(null);
	const [textField, settextField] = useState("");

	useEffect(() => {
		if (props.appendInput.emoji != null)
			settextField(textField + props.appendInput.emoji);
	}, [props.appendInput]);
	const onLetterEnteredhandleChange = (event) => {
		settextField(event.target.value);

		console.log("textField : " + event.target.value);
	};
	return (
		<input
			onChange={onLetterEnteredhandleChange}
			type="text"
			id="fname"
			placeholder="Chat with us"
			ref={chatField}
			value={textField}
		></input>
	);
};

export default ChatFieldBar;
