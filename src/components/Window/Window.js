import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../Window/Window.module.css";
import IconTab_Interface from "../Interface/IconTab_Interface";
import SearchField from "../Interface/SearchField";
import IconDisplayer from "../Interface/IconDisplayer";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
import { useEffect, useState } from "react";
const Window = (props) => {
	const [tabSelected, setTabSelected] = useState("recent");
	const [{ previous_State, current_State }, setOurState] = useState({
		previous_State: "no",
		current_State: "recent",
	});

	var EmojiList;
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

		//save the EMOJI in localStorage
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
		//also add in recent
		//check what is the last ID
	}
	function searchQuery(data) {
		setTabSelected(data);
		setOurState({
			previous_State: current_State,
			current_State: data,
		});
		// console.log("searchTabselected called" + tabSelected);
	}
	if (current_State === "recent" && previous_State === "recent") {
	}
	if (current_State === "recent" && previous_State != "recent") {
		console.log("_______LOAD LOCAL STORAGE_____");
		EmojiList = IconsImporterHandler(current_State);
	} else {
		console.log("_____LOAD  " + current_State + "  STATE");
		EmojiList = IconsImporterHandler(current_State);
	}
	if (previous_State === "recent" && current_State != "recent") {
		console.log("______-SAVE LOCAL STORAGE________");
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
						handTheList={EmojiList}
					/>
				</div>
			</div>
		</div>
	);
};

export default Window;
