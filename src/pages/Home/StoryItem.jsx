import React from "react";
import styles from "./index.module.css";

const StoryItem = ({ image, name }) => {
	return (
		<div className={styles['slide-wrapper']}>
			<div className={styles['slider-item']} onDrag={(e) => e.preventDefault()}>
				<div className={styles.image}>
					<img src={image} />
				</div>
				<span className={styles.title}>@{name}</span>
			</div>
		</div>
	);
};

export default StoryItem;
