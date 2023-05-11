import React from "react";
import profileImage from "../../assets/images/profileImage.jpg";
import LoveIcon from "../../assets/svg/LoveIcon.svg";
import backArrow from "../../assets/svg/backArrow.svg";
import downArrow from "../../assets/svg/downArrow.svg";
import styles from "./CommentContainer.module.css";
const CommentContainer = ({ setShow }) => {
	const SubCommentBox = () => {
		return (
			<div className={styles.SubCommentBox}>
				<div className={styles.left}>
					<div className={styles.leftImage}>
						<img src={profileImage} alt="" />
					</div>
					<div className={styles.leftText}>
						<p>Jenny M</p>
						<h4>Lovely picture 😍 </h4>
						<div>
							<span>Now</span>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<img src={downArrow} alt="" />
				</div>
			</div>
		);
	};

	const CommentBox = () => {
		return (
			<div className={styles.CommentBox}>
				<div className={styles.left}>
					<div className={styles.leftImage}>
						<img src={profileImage} alt="" />
					</div>
					<div className={styles.leftText}>
						<p>Jenny M</p>
						<h4>Lovely picture 😍 </h4>
						<div>
							<span>4+ Loves</span>
							<span>Reply</span>
							<span>Love Back</span>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<p>3+</p>
					<img src={LoveIcon} alt="" />
				</div>
			</div>
		);
	};

	return (
		<div className={styles.CommentMainContainer}>
			{/* <div className={styles.shadowContainer} /> */}
			<div className={styles.CommentInnerContainer}>
				<div className={styles.backBtnContainer}>
					<div className={styles.backArrow}>
						<img src={backArrow} alt="backArrow" onClick={() => setShow(false)} />
						<h3>Comments</h3>
					</div>
					<div className={styles.downArrow}>
						<h3>Latest</h3>
						<img src={downArrow} alt="downArrow" />
					</div>
				</div>

				<div className={styles.CommentBoxContainer}>
					{/* Use .map() here 👇 */}
					<div className={styles.MainCommentBox}>
						<CommentBox />
						<SubCommentBox />
						<SubCommentBox />
					</div>
					<div className={styles.MainCommentBox}>
						<CommentBox />
					</div>
					{/* Use .map() here 👆 */}
				</div>
			</div>
		</div>
	);
};

export default CommentContainer;
