import React, { useState } from "react";
import Cropper from "react-easy-crop";
import rightArrow from "../../../assets/svg/arrow-right-line.svg";
import threeDot from "../../../assets/svg/more-2-fill.svg";
import music from "../../../assets/svg/music-fill.svg";
import text from "../../../assets/svg/text.svg";
import styles from "../DragAndDrop.module.css";
import getCroppedImg from "./cropImage";

export const CropEasy = ({ photoURL, setOpenCrop, setPhotoURL, setFile }) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [rotation, setRotation] = useState(0);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

	const cropComplete = (croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	};

	const cropImage = async () => {
		try {
			const { file, url } = await getCroppedImg(photoURL, croppedAreaPixels, rotation);
			setPhotoURL(url);
			setFile(file);
			console.log(file);
			setOpenCrop(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.mainDivCropper}>
			<div className={styles.controls}>
				<div>
					<img src={threeDot} alt="" onClick={() => setOpenCrop(false)} />
					<img src={text} alt="" />
					<img src={music} alt="" />
				</div>
				<img src={rightArrow} alt="" onClick={cropImage} />
			</div>
			<div className={styles.mainCropContainer}>
					<Cropper
						image={photoURL}
						crop={crop}
						zoom={zoom}
						rotation={rotation}
						aspect={4 / 5}
						onZoomChange={setZoom}
						onRotationChange={setRotation}
						onCropChange={setCrop}
						onCropComplete={cropComplete}
					/>
			</div>
		</div>
	);
};

const zoomPercent = (value) => {
	return `${Math.round(value * 100)}%`;
};
