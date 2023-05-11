import React from 'react'
import styles from "./DragAndDrop.module.css";
import comment from "../../assets/svg/comment.svg";
import heart from "../../assets/svg/heart.svg";
import share from "../../assets/svg/share.svg";
const ImageBackground = ({ photoURL }) => {
	return (
		<div className={styles.ImageBackground}>
			<img src={photoURL} alt="" />
			<div className={styles.actionContainer}>
				<div className={styles.h}>
					<img src={heart} alt="" />
					<p>26</p>
				</div>
				<div className={styles.c}>
					<img src={comment} alt="" />
					<p>03</p>
				</div>
				<div className={styles.s}>
					<img src={share} alt="" />
				</div>
			</div>
		</div>
	);
};

export default ImageBackground