import React from "react";
import EP1 from "../../assets/images/EP1.jpg";
import EP4 from "../../assets/images/EP4.jpg";
import EP5 from "../../assets/images/EP5.jpg";
import EP6 from "../../assets/images/EP6.jpg";
import EP7 from "../../assets/images/EP7.jpg";
import heart from "../../assets/svg/heart.svg";
import comment from "../../assets/svg/comment.svg";
import share from "../../assets/svg/share.svg";
import profile1 from "../../assets/images/profile1.png";
import styles from "./Explore.module.css";
const ExploreYourMind = () => {
	return (
		<>
			<h1>Explore your mind</h1>
			<div className={styles.ExploreMindCont1}>
				<img src={EP1} alt="" />
				<div className={styles.ExploreMindCont1Overlay} />
				<div className={styles.MindTop}>
					<div>
						<img src={profile1} alt="" />
						<h5>
							<p>Construction</p>
							<span>@itsConstruction</span>
						</h5>
					</div>
					<h3 onClick={() => console.log("first")}>Follow</h3>
				</div>
				<div className={styles.MindBottom}>
					<p className={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					<div className={styles.actionContainer}>
						<div className={styles.h}>
							<img src={heart} alt="" />
							<p>26</p>
						</div>
						<div className={styles.c} onClick={() => setShow(true)}>
							<img src={comment} alt="" />
							<p>03</p>
						</div>
						<div className={styles.s}>
							<img src={share} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.ExploreImageMainContainer}>
				<h3>Recommend for you</h3>
				<div className={styles.ExploreImageContainer}>
					<img src={EP4} alt="" className={styles.row2} />
					<img src={EP4} alt="" className={styles.row21} />
					<img src={EP5} alt="" />
					<img src={EP6} alt="" />
					<img src={EP7} alt="" />
					<img src={EP5} alt="" />
					<img src={EP6} alt="" />
					<img src={EP7} alt="" />
					<img src={EP5} alt="" />
					<img src={EP6} alt="" />
					<img src={EP7} alt="" />
					<img src={EP5} alt="" />
					<img src={EP6} alt="" />
				</div>
			</div>
		</>
	);
};

export default ExploreYourMind;
