import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../Window/Window.module.css";
import IconTab_Interface from "../Interface/IconTab_Interface";
import SearchField from "../Interface/SearchField";
import IconDisplayer from "../Interface/IconDisplayer";
import { useState } from "react";
const Window = (props) => {
	const [tabSelected, setTabSelected] = useState("recent");
	const [{ previous_State, current_State }, setOurState] = useState({
		previous_State: "no",
		current_State: "recent",
	});

	function retrieve_data(STATE_TAB) {
		setOurState({
			previous_State: current_State,
			current_State: STATE_TAB,
		});

		if (STATE_TAB != tabSelected) {
			setTabSelected(STATE_TAB);
		}
	}
	function takeEmoji(theEmoji) {
		props.emojiBuffer(theEmoji);
		//also add in recent
		//check what is the last ID

		let emoji_added = false;
		let emoji_ARRAY = [];
		var ID_local = 0;
		let storage_result = JSON.parse(localStorage.getItem("emojiDatabase"));

		let { emoji, counter } = theEmoji;
		if (storage_result != null && storage_result.length != 0) {
			//if emoji found, increment
			storage_result.forEach((storage_emoji) => {
				if (storage_emoji.emoji === emoji) {
					storage_emoji.counter++;
					emoji_added = true;
				}
			});

			if (!emoji_added) {
				ID_local = storage_result[storage_result.length - 1].ID + 1;
				let emojiBuffer = { ID: ID_local, emoji, counter };
				storage_result.push(emojiBuffer);
			}

			localStorage.setItem(
				"emojiDatabase",
				JSON.stringify(storage_result)
			);
		} else {
			let emojiBuffer = { ID: 0, emoji, counter };
			emoji_ARRAY.push(emojiBuffer);
			localStorage.setItem("emojiDatabase", JSON.stringify(emoji_ARRAY));
		}
	}
	function searchQuery(data) {
		setTabSelected(data);

		// console.log("searchTabselected called" + tabSelected);
	}
	return (
		<div className={classes.windowCard}>
			<div className="container-fluid">
				<div className={`row ${classes.lightTheme}`}>
					<IconTab_Interface
						TabState={tabSelected}
						IconTabClicked={retrieve_data}
					/>
				</div>
				<div className={`row ${classes.lightTheme}`}>
					<SearchField searchBuffer={searchQuery} />
				</div>
				<div className={`row ${classes.gallerySection}`}>
					<IconDisplayer
						emojiPressed={takeEmoji}
						displayParameters={current_State}
					/>
				</div>
			</div>
		</div>
	);
};

export default Window;
