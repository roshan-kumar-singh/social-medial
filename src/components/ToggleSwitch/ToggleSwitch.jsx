import React, { useState } from "react";

const ToggleSwitch = ({
	value,
	setValue,
	switchOn = "#2E5EE2",
	switchOff = "#959595",
	labelOn = "#909AFF",
	labelOff = "#c4c4c4",
	ContainerHeight = "30",
	ContainerWidth = "60",
	switchHeight = "30",
	switchWidth = "30",
	ContainerPadding = "",
}) => {
	const [toggleBtn, setToggleBtn] = useState(value);

	const styles = {
		ToggleContainer: {
			width: ContainerWidth + "px",
			height: ContainerHeight + "px",
			borderRadius: "144.056px",
			overflow: "hidden",
		},
		toggleSwitchLabel: {
			display: "block",
			width: "100%",
			height: "100%",
			background: toggleBtn ? labelOn : labelOff,
			cursor: "pointer",
			transition: "all .2s ease-in-out",
			position: "relative",
		},
		toggleSwitchOn: {
			display: "block",
			width: switchHeight + "px",
			height: switchWidth + "px",
			background: switchOn,
			borderRadius: "50%",
			transition: "all .2s ease-in-out",
			position: "absolute",
			top: "50%",
			right: ContainerPadding,
			transform: "translateY(-50%)",
		},
		toggleSwitchOff: {
			display: "block",
			width: switchHeight + "px",
			height: switchWidth + "px",
			background: switchOff,
			borderRadius: "50%",
			transition: "all .2s ease-in-out",
			margin: "0",
			position: "absolute",
			top: "50%",
			left: ContainerPadding,
			transform: "translateY(-50%)",
		},
	};

	return (
		<div style={styles.ToggleContainer}>
			<input
				type="checkbox"
				name="toggleSwitch"
				id="toggleSwitch"
				style={{ display: "none" }}
				onChange={(e) => {
					setValue(e.target.checked);
					setToggleBtn(e.target.checked);
				}}
			/>
			<label style={styles.toggleSwitchLabel} htmlFor="toggleSwitch">
				{toggleBtn ? <span style={styles.toggleSwitchOn}></span> : <span style={styles.toggleSwitchOff}></span>}
			</label>
		</div>
	);
};

export default ToggleSwitch;
