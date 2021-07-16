import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../Window/Window.module.css";
import IconTab_Interface from "../Interface/IconTab_Interface";
import SearchField from "../Interface/SearchField";
import IconDisplayer from "../Interface/IconDisplayer";
import { useState } from "react";
const Window = (props) => {
	const [tabSelected, setTabSelected] = useState("bear");

	function retrieve_data(STATE_TAB) {
		setTabSelected(STATE_TAB);
	}
	function takeEmoji(theEmoji) {
		props.emojiBuffer(theEmoji);
	}
	function searchQuery(data) {
		setTabSelected(data);
		console.log("searchTabselected called" + tabSelected);
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
						displayParameters={tabSelected}
					/>
				</div>
			</div>
		</div>
	);
};

export default Window;
