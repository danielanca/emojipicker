import classes from "./IconDisplayer.module.css";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
import IconItem from "./IconItem";
import { useEffect, useState } from "react";
import TabIcons_importer from "../../assets/tab_icons/TabIcons_importer";

const IconDisplayer = (props) => {
	const Result = props.handTheList;

	const [{ previousFocus, currentFocus }, setTabFocus] = useState({
		previousFocus: "none",
		currentFocus: "recent",
	});

	useEffect(() => {
		if (props.searchRequest != "") {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: "NOSTATE",
			});
		} else {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: "recent",
			});
		}
	}, [props.searchRequest]);
	useEffect(() => {
		setTabFocus({
			previousFocus: currentFocus,
			currentFocus: props.displayParameters,
		});
		let EL = document.getElementById("myList");

		var stateCoords = {
			recent: {
				coords: 0,
			},
			smileys: { coords: 306 },
			people: {
				coords: 1117,
			},
			activities: {
				coords: 3045,
			},
			animals: {
				coords: 3548,
			},
			food: {
				coords: 4359,
			},
			travel: {
				coords: 5085,
			},
			objects: {
				coords: 6259,
			},
		};

		EL.scrollTop = stateCoords[props.displayParameters].coords;
	}, [props.displayParameters]);

	function EmojiRetreieve_Handler(data) {
		props.emojiPressed(data);
	}

	const scrollHandler = (event) => {
		if (currentFocus === "NOSTATE") {
			return;
		}
		let tracker = event.target;

		if (previousFocus != currentFocus) {
			console.log("SECTION CHANGEEEED:" + currentFocus);
			props.focusTab(currentFocus);
		}

		if (tracker.scrollTop < 306) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[0].title,
			});
		} else if (tracker.scrollTop >= 306 && tracker.scrollTop < 1117) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[1].title,
			});
		} else if (tracker.scrollTop >= 1117 && tracker.scrollTop < 3045) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[2].title,
			});
		} else if (tracker.scrollTop >= 3045 && tracker.scrollTop < 3548) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[3].title,
			});
		} else if (tracker.scrollTop >= 3548 && tracker.scrollTop < 4359) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[4].title,
			});
		} else if (tracker.scrollTop >= 4359 && tracker.scrollTop < 5085) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[5].title,
			});
		} else if (tracker.scrollTop >= 5085 && tracker.scrollTop < 6259) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[6].title,
			});
		} else if (tracker.scrollTop >= 6259 && tracker.scrollTop < 7381) {
			setTabFocus({
				previousFocus: currentFocus,
				currentFocus: TabIcons_importer[7].title,
			});
		}
	};
	console.log("SEARCH REQUEST IS:" + props.searchRequest);
	if (currentFocus === "NOSTATE") {
		return (
			<div className={classes.listSection}>
				<ul
					id="myList"
					onScroll={scrollHandler} //dont forget to add if STATE IS NOSTATE ignore
					className={classes.iconContainer}
				>
					{IconsImporterHandler(props.searchRequest).map((emojix) => (
						<IconItem
							emojiPressed={EmojiRetreieve_Handler}
							emoji={emojix}
						/>
					))}
				</ul>
			</div>
		);
	}
	return (
		<div className={classes.listSection}>
			<ul
				id="myList"
				onScroll={scrollHandler} //dont forget to add if STATE IS NOSTATE ignore
				className={classes.iconContainer}
			>
				{TabIcons_importer.map((element) => {
					return (
						<>
							<div className={classes.categoryHeader}>
								<a className={classes.categoryTitle}>
									{element.title}
								</a>
							</div>
							{IconsImporterHandler(element.title).map(
								(emojix) => (
									<IconItem
										emojiPressed={EmojiRetreieve_Handler}
										emoji={emojix}
									/>
								)
							)}
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default IconDisplayer;
