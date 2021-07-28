function IconsImporterHandler(IconTabSelected) {
	const emojiDatabase = require("../../assets/emoji_pack/emoji.json");
	var selectedEmojis = [];
	var selectedIndex = 0;
	const MAX_LOAD_LENGTH = 40;

	if (IconTabSelected.includes("recent")) {
		let filter_emoji = JSON.parse(localStorage.getItem("emojiDatabase"));
		if (filter_emoji != null) {
			filter_emoji.forEach((element) => {
				// console.log("Object names:" + element.emoji);
			});
			filter_emoji.sort(function (a, b) {
				return b.counter - a.counter;
			});
			for (var i = 0; i < filter_emoji.length; i++) {
				selectedEmojis[i] = filter_emoji[i].emoji;
			}
		} else {
			let emoji_ARRAY = [];
			let emojiBuffer = { ID: 0, emoji: "😀", counter: 1 };
			emoji_ARRAY.push(emojiBuffer);
			localStorage.setItem("emojiDatabase", JSON.stringify(emoji_ARRAY));
		}
	} else {
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
	}

	return selectedEmojis;
}

export default IconsImporterHandler;
