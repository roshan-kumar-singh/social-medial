import React, { useState } from "react";
import Background2 from "../../assets/images/Background2.jpg";
import LeftArrow from "../../assets/svg/LeftArrow.svg";
import comment from "../../assets/svg/comment.svg";
import heart from "../../assets/svg/heart.svg";
import share from "../../assets/svg/share.svg";
import styles from "./LiveIndex.module.css";
const LiveShow = ({ setLivePopup, setGoLiveShow, setLiveAgainShow, setLiveShowShow }) => {
	const [LiveEndPopupShow, setLiveEndPopupShow] = useState(false);
	return (
		<div className={styles.LiveMainContainer}>
			{LiveEndPopupShow && (
				<div className={styles.LiveEndPopup}>
					<h1>Do You Want To <span>End Live ?</span></h1>
					<div>
						<button type="button" onClick={() => setLiveEndPopupShow(false)}>
							Cancel
						</button>
						<button
							type="button"
							onClick={() => {
								setLiveEndPopupShow(false);
								setGoLiveShow(false);
								setLiveShowShow(false);
								setLiveAgainShow(true);
							}}>
							End Live
						</button>
					</div>
				</div>
			)}
			<div className={styles.LiveClose} onClick={() => setLivePopup(false)}></div>
			<div className={`${styles.LiveContainer} ${styles.LiveShow}`}>
				<div className={styles.liveDivContainer}>
					<img src={Background2} alt="" />
				</div>
				<div className={styles.LiveShowTop}>
					<img src={LeftArrow} alt="" />
					<button type="button" onClick={() => setLiveEndPopupShow(true)}></button>
				</div>
				<div className={styles.LiveShowBottom}>
					<div className={styles.LiveShowBottomLeft}>
						<h4>@username Very Good</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Nulla ac tortor vitae ac gravida tempus. Mi integer duis sit
							amet et.
						</p>
						<div>
							<span>20+ Joined Live</span>
							<span>#Nature</span>
						</div>
					</div>
					<div className={styles.LiveShowBottomRight}>
						<img src={heart} alt="" />
						<img src={comment} alt="" />
						<img src={share} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveShow;
