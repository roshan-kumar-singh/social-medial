import React, { useRef, useState } from "react";
import styles from "./DragAndDrop.module.css";
import ImageBackground from "./ImageBackground";
import TextBox from "./TextBox";
import { CropEasy } from "./crop/CropEasy";
const DragAndDrop = ({ setImagePopup }) => {
	const [openCrop, setOpenCrop] = useState(false);
	const [photoURL, setPhotoURL] = useState("");
	const [textBox, setTextBox] = useState(false);
	const [file, setFile] = useState([]);
	const image = useRef();

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFile(file);
			setPhotoURL(URL.createObjectURL(file));
			setOpenCrop(true);
		}
		e.target.value = null;
	};

	const Controls = () => {
		return (
			<div className={styles.InnerPopup}>
				<h1>Update eMagz</h1>
				<h4>Drag & Drop your image or video</h4>
				<h4>Or</h4>
				<div className={styles.buttonContainer}>
					<button className={styles.button} onClick={() => setTextBox(true)}>
						Text
					</button>
					<button className={styles.button}>VMagz</button>
					<button className={styles.button}>Camera</button>
					<button className={styles.button} onClick={() => image.current.click()}>
						Upload From Computer
					</button>
				</div>
				<input type="file" ref={image} style={{ display: "none" }} onChange={handleFileInputChange} />
			</div>
		);
	};

	return (
		<div className={styles.PopupMainContainer}>
			<div className={styles.PopupClose} onClick={() => setImagePopup(false)}></div>
			<div className={styles.PopupContainer}>
				{openCrop && <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />}
				<Controls />
				{photoURL && <ImageBackground photoURL={photoURL} />}
				{textBox && <TextBox />}
			</div>
		</div>
	);
};

export default DragAndDrop;
