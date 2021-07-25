import classes from "../Interface/ChatForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatFieldBar from "./ChatFieldBar";
import CustomButon from "./CustomButton";
const ChatForm = (props) => {
	let emoji_local = props.emojiParameters;

	const handleClick = (componentFired) => {
		console.log("Button fired:" + componentFired);
		props.buttonFired(componentFired);
	};
	return (
		<form className={classes.ChatSection}>
			<label for="fname">Chat with your friend:</label>
			<ChatFieldBar appendInput={emoji_local} />

			<CustomButon clickFired={handleClick} buttonType="attachment" />
			<CustomButon clickFired={handleClick} buttonType="emoji" />
		</form>
	);
};

export default ChatForm;
