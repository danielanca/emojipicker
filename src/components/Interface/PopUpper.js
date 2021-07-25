const PopUpper = (props) => {
	if (props.visible) {
		console.log("Request to POP UP");
		return props.children;
	} else {
		console.log("Request to Pop OUT");
		return "";
	}
};

export default PopUpper;
