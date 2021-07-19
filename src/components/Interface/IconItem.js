import { useState } from "react";
import classes from "../Interface/IconItem.module.css";

const IconItem = (props) => {
	const [iconCount, seticonCount] = useState(0);
	function setEmoji() {
		let emoji = props.emoji;
		console.log(emoji);
		props.emojiPressed({ emoji, counter: iconCount });
		let val = iconCount + 1;
		seticonCount(val);
	}
	return (
		<li onClick={setEmoji} className={classes.iconContainer}>
			<a className={classes.iconSize}> {props.emoji}</a>
		</li>
	);
};

export default IconItem;
