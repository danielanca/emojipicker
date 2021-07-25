import classes from "./CustomButton.module.css";
import emoji_icon from "../../assets/emoji_main.png";
import attachment_icon from "../../assets/attachment_icon.png";
const CustomButon = (props) => {
	const handleButton = () => {
		props.clickFired(props.buttonType);
	};

	var buttonStyling, srcImage;
	switch (props.buttonType) {
		case "attachment":
			buttonStyling = classes.attachmentButton;
			srcImage = attachment_icon;
			break;

		case "emoji":
			buttonStyling = classes.emojiButton;
			srcImage = emoji_icon;
			break;
	}

	return (
		<button onClick={handleButton} type="button" className={buttonStyling}>
			<img src={srcImage}></img>
		</button>
	);
};

export default CustomButon;
