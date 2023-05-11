import React, { useState } from "react";
import Switch from "react-switch";
import RightArrow from "../../assets/svg/RightArrow";
import styles from "./Privacy.module.css";
import search from "../../assets/svg/search.svg";

const Comment = () => {
	const [Everyone, setEveryone] = useState(true);
	const [PeopleFollow, setPeopleFollow] = useState(false);
	const [YourFollowers, setYourFollowers] = useState(false);
	const [FollowFollowers, setFollowFollowers] = useState(false);
	const [Search, setSearch] = useState("");

	return (
		<div className={styles.CommentContainer}>
			<div className={styles.CommentsBox}>
				<h1>Comments</h1>
				<p>Control</p>
				<div className={styles.CommentsInnerBox}>
					<h3>Allow comments from</h3>
					<div className={styles.Everyone}>
						<h4>Everyone</h4>
						<RightArrow />
					</div>
				</div>

				<div className={styles.CommentsInnerBox}>
					<div className={styles.BlockCommentFrom}>
						<h3>Block comment from</h3>
						<p>Any new comment from people you block will not be visible to anyone but them</p>
					</div>
					<div className={styles.Everyone}>
						<h4>0 people</h4>
						<RightArrow />
					</div>
				</div>
			</div>

			<div className={styles.AllowCommentsFrom}>
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
						onChange={(e) => setYourFollowers(e)}
						checked={YourFollowers}
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
						<p>People you follow and your followers</p>
						<span>550 people</span>
					</div>
					<Switch
						onChange={(e) => setFollowFollowers(e)}
						checked={FollowFollowers}
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

			<div className={styles.BlockCommentFromSearch}>
				<p>Block comments from</p>
				<div>
					<img src={search} alt="Search" />
					<input type="search" placeholder="Search" value={Search} onChange={(e) => setSearch(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default Comment;
