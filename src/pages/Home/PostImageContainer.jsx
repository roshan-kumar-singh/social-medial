import React, { useState } from "react";
import Rectangle1 from "../../assets/images/Rectangle 502.png";
import Rectangle2 from "../../assets/images/Rectangle 503.png";
import VectorGraph from "../../assets/svg/VectorGraph.svg";
import comment from "../../assets/svg/comment.svg";
import heart from "../../assets/svg/heart.svg";
import share from "../../assets/svg/share.svg";
import CommentContainer from "./CommentContainer";
import styles from "./index.module.css";

const PostImageContainer = ({ image, profile }) => {
	const [show, setShow] = useState(false);
	return (
		<div className={styles.imageContainer}>
			<img src={image} alt="image1" />

			<div className={styles.postHeader}>
				<div className={styles.rightPostHeader}>
					<div className={styles.imagePostBox}>
						<img src={profile} alt="" />
					</div>

					<div className={styles.textPostBox}>
						<h3>Construction</h3>
						<p>@itsConstruction</p>
					</div>
				</div>

				<div className={styles.leftPostHeader}>
					<img src={VectorGraph} alt="VectorGraph" />
				</div>
			</div>

			<div className={styles.postFooter}>
				<div className={styles.commentContainer}>
					<p className={styles.comment}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

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

				<div className={styles.multi}>
					<img src={Rectangle1} alt="Rectangle1" />
					<img src={Rectangle2} alt="Rectangle2" className={styles.img2} />
					10 +
				</div>
			</div>

			{show && <CommentContainer setShow={setShow} />}
		</div>
	);
};

export default PostImageContainer;
