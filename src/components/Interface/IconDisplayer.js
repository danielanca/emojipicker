import classes from "./IconDisplayer.module.css";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
import IconItem from "./IconItem";
import { useState } from "react";

const IconDisplayer = (props) => {
	const Result = IconsImporterHandler(props.displayParameters);
	function EmojiRetreieve_Handler(data) {
		props.emojiPressed(data);
	}

	return (
		<div className={classes.listSection}>
			<ul className={classes.iconContainer}>
				{Result.map((emoji) => (
					<IconItem
						emojiPressed={EmojiRetreieve_Handler}
						emoji={emoji}
					/>
				))}
			</ul>
		</div>
	);
};

export default IconDisplayer;
