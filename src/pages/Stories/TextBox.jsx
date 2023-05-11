import React, { useState } from "react";
import { SketchPicker } from "react-color";
import rightArrow from "../../assets/svg/arrow-right-line.svg";
import colorBall from "../../assets/svg/colorBall.svg";
import threeDot from "../../assets/svg/more-2-fill.svg";
import music from "../../assets/svg/music-fill.svg";
import text from "../../assets/svg/text.svg";
import styles from "./DragAndDrop.module.css";

const TextBox = () => {
	const [colorPicker, setColorPicker] = useState(false);
	const [bgColor, setBgColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

	return (
		<div className={styles.TextBox}>
			<div
				className={styles.TextBox}
				style={{
					background: `rgba(${bgColor.r},${bgColor.g},${bgColor.b},${bgColor.a})`,
				}}>
				<div className={styles.controls}>
					<div>
						<img src={threeDot} alt="" />
						<img src={text} alt="" />
						<img src={colorBall} alt="" onClick={() => setColorPicker(!colorPicker)} />
						<img src={music} alt="" />
					</div>
					<img src={rightArrow} alt="" />
				</div>
				{colorPicker && (
					<div className={styles.ColorPicker}>
						<SketchPicker
							color={bgColor}
							onChange={(e) => {
								setBgColor(e.rgb);
								console.log(e.rgb);
							}}
						/>
					</div>
				)}
				<textarea></textarea>
			</div>
		</div>
	);
};

export default TextBox;
