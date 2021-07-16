import { useEffect, useRef } from "react";
import classes from "./Search_Input.module.css";

const Search_Input = (props) => {
	const textField = useRef("");

	const handleChange = () => {
		console.log("Data changed to:" + textField.current.value);

		props.searchBuffer(textField.current.value);
	};

	// useEffect(() => {
	// 	console.log("Danutu:");
	// }, [textField]);

	function SubmitHandler(event) {
		event.preventDefault();

		// setIsEmpty(true);
		props.searchData(textField.current.value);
		textField.current.value = "";
	}
	return (
		<form onSubmit={SubmitHandler} className={classes.inputspace}>
			<input
				onChange={handleChange}
				className={classes.labelItem}
				type="text"
				name="name"
				ref={textField}
			/>
		</form>
	);
};

export default Search_Input;
