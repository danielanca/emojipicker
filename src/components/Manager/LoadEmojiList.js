import TabIcons_importer from "../../assets/tab_icons/TabIcons_importer";

const LoadEmojiList = () => {
	const emojiDatabase = require("../../assets/emoji_pack/emoji.json");

	let filter_emoji = JSON.parse(localStorage.getItem("emojiDatabase"));
	filter_emoji.forEach((element) => {
		// console.log("Object names:" + element.emoji);
	});
	filter_emoji.sort(function (a, b) {
		return b.counter - a.counter;
	});
	for (var i = 0; i < filter_emoji.length; i++) {
		selectedEmojis[i] = filter_emoji[i].emoji;
	}

	for (var i = 0; i < emojiDatabase.length; i++) {
		if (
			emojiDatabase[i].category
				.toLowerCase()
				.includes(IconTabSelected.toString().toLowerCase()) ||
			emojiDatabase[i].description
				.toLowerCase()
				.includes(IconTabSelected.toString().toLowerCase())
		) {
			selectedEmojis[selectedIndex++] = emojiDatabase[i].emoji;
		}
	}

	return selectedEmojis;
};

export default LoadEmojiList;
