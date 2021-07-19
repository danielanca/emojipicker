import classes from "./IconDisplayer.module.css";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
import IconItem from "./IconItem";
import { useState } from "react";

const IconDisplayer = (props) => {
	const Result = props.handTheList;
	let iconTitle = props.displayParameters;
	function EmojiRetreieve_Handler(data) {
		props.emojiPressed(data);
	}
	const scrollHandler = (event) => {
		let tracker = event.target;
		console.log(
			"Scroll detected: " +
				tracker.scrollHeight +
				"   " +
				tracker.scrollTop +
				"   " +
				tracker.clientHeight
		);
	};

	return (
		<div className={classes.listSection}>
			<ul onScroll={scrollHandler} className={classes.iconContainer}>
				<div className={classes.categoryHeader}>
					<a className={classes.categoryTitle}>{iconTitle}</a>
				</div>
				{/* <Emoji_List /> */}
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
