import React from "react";
import { useNavigate } from "react-router-dom";
import Background1 from "../../assets/images/Background1.jpg";
import styles from "./Post.module.css";
const PostIndex = () => {
	const navigate = useNavigate();
	
	return (
		<div className={`${styles.Container} ${styles.PostIndex}`}>
			<img src={Background1} alt="" />
			<div className={styles.PostIndexBtnContainer}>
				<button type="button" onClick={() => navigate(`/EditPost/${"forNowRandomID"}`)}>
					Edit Post
				</button>
				<button type="button">Delete Post</button>
			</div>
		</div>
	);
};

export default PostIndex;
