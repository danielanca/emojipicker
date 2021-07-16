import classes from "../Interface/IconTab.module.css";

const IconTab = (props) => {
	function IconTabClickedHandler() {
		props.AltData(props.title);
	}
	return (
		<div
			onClick={IconTabClickedHandler}
			key={props.id}
			className={`col-xs-1 ${classes.ten}`}
		>
			<img
				className={
					classes.addBrightness + " " + classes[props.isActive]
				}
				src={props.imgSrc.default}
				alt={props.altParam}
			></img>
		</div>
	);
};

export default IconTab;
