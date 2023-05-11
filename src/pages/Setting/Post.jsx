import React, { useState } from "react";
import Switch from "react-switch";
import RightArrow from "../../assets/svg/RightArrow";
import styles from "./Privacy.module.css";

const Post = () => {
    const [Everyone, setEveryone] = useState(true);
	const [PeopleFollow, setPeopleFollow] = useState(false);
	const [NoOne, setNoOne] = useState(false);
	return (
		<div className={styles.PostContainer}>
			<div className={styles.PostContainerInner}>
				<h1>Post</h1>
				<div className={styles.InnerDiv}>
					<h5>Likes & View</h5>
					<span>
						<p>Everyone</p>
						<RightArrow />
					</span>
				</div>
				<div className={styles.InnerDiv}>
					<div>
						<h5>Likes & View</h5>
						<h6>Manage your likes and view on your post</h6>
					</div>
					<span>
						<p>0 people</p>
						<RightArrow />
					</span>
				</div>
			</div>

			<div className={styles.AllowTagFrom}>
				<h5>Allow comments from</h5>
				<div className={styles.AllowCommentsBox}>
					<div>
						<p>Everyone</p>
					</div>
					<Switch
						onChange={(e) => setEveryone(e)}
						checked={Everyone}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#3A0DBB"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={19}
						width={46}
					/>
				</div>
				<div className={styles.AllowCommentsBox}>
					<div>
						<p>People you follow</p>
						<span>53 people</span>
					</div>
					<Switch
						onChange={(e) => setPeopleFollow(e)}
						checked={PeopleFollow}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#3A0DBB"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={19}
						width={46}
					/>
				</div>
				<div className={styles.AllowCommentsBox}>
					<div>
						<p>Your followers</p>
						<span>500 people</span>
					</div>
					<Switch
						onChange={(e) => setNoOne(e)}
						checked={NoOne}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#3A0DBB"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={19}
						width={46}
					/>
				</div>
			</div>
		</div>
	);
};

export default Post;
