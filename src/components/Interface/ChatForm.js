import classes from "../Interface/ChatForm.module.css";

import ChatFieldBar from "./ChatFieldBar";
const ChatForm = (props) => {
	let emoji_local = props.emojiParameters;
	return (
		<form className={classes.ChatSection}>
			<label for="fname">Your Message:</label>
			<ChatFieldBar appendInput={emoji_local} />
		</form>
	);
};

export default ChatForm;
