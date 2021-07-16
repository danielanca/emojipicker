import search_icon from "../../assets/tab_icons/search_icon.png";
import classes from "./SearchIcon.module.css";
const SearchIcon = () => {
	return (
		<img alt={"Alt text"} className={classes.icon} src={search_icon}></img>
	);
};

export default SearchIcon;
