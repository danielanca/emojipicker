function IconsImporterHandler(IconTabSelected) {
	const emojiDatabase = require("../../assets/emoji_pack/emoji.json");
	var selectedEmojis = [];
	var selectedIndex = 0;

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
}

export default IconsImporterHandler;
