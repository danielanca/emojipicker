import { useEffect, useRef } from "react";
import classes from "./Search_Input.module.css";

const Search_Input = (props) => {
	const textField = useRef("");

	const handleChange = () => {
		console.log("Data changed to:" + textField.current.value);

		props.searchBuffer(textField.current.value);
	};

	function SubmitHandler(event) {
		event.preventDefault();

		props.searchData(textField.current.value);
		textField.current.value = "";
	}
	return (
		<form onSubmit={SubmitHandler} className={classes.inputspace}>
			<input
				onChange={handleChange}
				className={classes.labelItem + " " + classes.search_input}
				type="text"
				name="name"
				ref={textField}
			/>
		</form>
	);
};

export default Search_Input;
