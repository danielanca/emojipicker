import classes from "../Interface/SearchField.module.css";
import SearchIcon from "./SearchIcon";
import Search_Input from "./Search_Input";
import IconsImporterHandler from "../Manager/IconsImporterHandler";
const SearchField = (props) => {
	var searchText;
	console.log("Search field received:" + searchText);

	function SearchText_Handler(text) {
		console.log("Received:" + text);

		props.searchBuffer(text);
	}
	return (
		<div className={classes.search_bar}>
			<div className={classes.search_field}>
				<SearchIcon />
				<Search_Input searchBuffer={SearchText_Handler} />
			</div>
		</div>
	);
};

export default SearchField;
