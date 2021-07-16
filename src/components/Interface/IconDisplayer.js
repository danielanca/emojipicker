import classes from "./IconDisplayer.module.css";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
import IconItem from "./IconItem";

const IconDisplayer = (props) => {
	const Result = IconsImporterHandler(props.displayParameters);
	function EmojiRetreieve_Handler(data) {
		props.emojiPressed(data);
	}
	// console.log("Icon Displayer received EVENT:" + props.displayParameters);
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

// const images = importAll(
// 	require.context(
// 		"../../assets/emoji_pack/smiley",
// 		false,
// 		/\.(png|jpe?g|svg)$/
// 	)
// );

// var icons_name = Object.keys(images);

// function importAll(r) {
// 	let images = {};
// 	r.keys().map((item, index) => {
// 		images[item.replace("./", "")] = r(item);
// 	});
// 	return images;
// }
