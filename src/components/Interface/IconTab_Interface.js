import React, { useEffect, useState } from "react";
import IconTab from "./IconTab";
import TabIcons_importer from "../../assets/tab_icons/TabIcons_importer";

const IconTab_Interface = (props) => {
	const [IconActive, setIconActive] = useState(props.TabState);
	function IconTabClickedHandler(data) {
		setIconActive(data);
		props.IconTabClicked(data);
	}

	useEffect(() => {
		setIconActive(props.TabState);
	}, [props.TabState]);
	return (
		<div>
			{TabIcons_importer.map(({ id, title, src, description }) => (
				<IconTab
					AltData={IconTabClickedHandler}
					isActive={title === IconActive ? "active" : ""}
					key={id}
					name={title}
					altParam={description}
					title={title}
					imgSrc={src}
				></IconTab>
			))}
		</div>
	);
};

export default IconTab_Interface;
