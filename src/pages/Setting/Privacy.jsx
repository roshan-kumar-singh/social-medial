import React, { useState } from "react";
import Switch from "react-switch";
import GuardIcon from "../../assets/svg/GuardIcon.svg";
import LockIcon from "../../assets/svg/LockIcon.svg";
import RightArrow from "../../assets/svg/RightArrow";
import Comment from "./Comment";
import styles from "./Privacy.module.css";
import Post from "./Post";
import { Mention } from "./Mention";
import { Emagz } from "./Emagz";

const Privacy = () => {
	const [Account, setAccount] = useState(true);
	const [Comments, setComments] = useState(true);
	const [Posts, setPosts] = useState(false);
	const [Mentions, setMentions] = useState(false);
	const [Story, setStory] = useState(false);
	const [Live, setLive] = useState(false);
	const [Messages, setMessages] = useState(false);

	const handelClicks = (action) => {
		if (action === "Comment") {
			setComments(!Comments);
			setPosts(false);
			setMentions(false);
			setStory(false);
			setLive(false);
			setMessages(false);
		} else if (action === "Posts") {
			setPosts(!Posts);
			setComments(false);
			setMentions(false);
			setStory(false);
			setLive(false);
			setMessages(false);
		} else if (action === "Mentions") {
			setMentions(!Mentions);
			setPosts(false);
			setComments(false);
			setStory(false);
			setLive(false);
			setMessages(false);
		} else if (action === "Story") {
			setStory(!Story);
			setPosts(false);
			setComments(false);
			setMentions(false);
			setLive(false);
			setMessages(false);
		} else if (action === "Live") {
			setLive(!Live);
			setPosts(false);
			setComments(false);
			setMentions(false);
			setStory(false);
			setMessages(false);
		} else if (action === "Messages") {
			setMessages(!Messages);
			setPosts(false);
			setComments(false);
			setMentions(false);
			setStory(false);
			setLive(false);
		} else {
			setComments(false);
			setPosts(false);
			setMentions(false);
			setStory(false);
			setLive(false);
			setMessages(false);
		}
	};

	return (
		<div className={`${styles.Container} ${styles.Privacy}`}>
			<div className={styles.LeftPrivacyContainer}>
				<h1 className={styles.PrivacyText}>Privacy</h1>
				<div className={styles.PrivateAccountBox}>
					<img src={LockIcon} alt="" />
					<div>
						<h3>Private Account</h3>
						<p>only people who follow can see ur post and message you </p>
					</div>
					<Switch
						onChange={(e) => setAccount(e)}
						checked={Account}
						offColor={"#c4c4c4"}
						onColor={"#EFEFEF"}
						// offHandleColor={""}
						onHandleColor={"#297C45"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={30}
						width={64}
					/>
				</div>
				<div className={styles.PrivateAccountBox}>
					<img src={GuardIcon} alt="" />
					<div>
						<h3>Private Account</h3>
						<p>only people who follow can see ur post and message you </p>
					</div>
					<button type="button">
						<RightArrow />
					</button>
				</div>
				<h5 className={styles.InteractionsText}>Interactions</h5>

				<div className={styles.InteractionsContainer}>
					<div
						className={`${styles.InteractionsBox} ${Comments && styles.active}`}
						onClick={() => handelClicks("Comment")}>
						<div>
							<h3>Comments</h3>
							<p>Manage your comment's</p>
						</div>
						<RightArrow />
					</div>

					<div className={`${styles.InteractionsBox} ${Posts && styles.active}`} onClick={() => handelClicks("Posts")}>
						<div>
							<h3>Posts</h3>
							<p>Manage your posts</p>
						</div>
						<RightArrow />
					</div>

					<div
						className={`${styles.InteractionsBox} ${Mentions && styles.active}`}
						onClick={() => handelClicks("Mentions")}>
						<div>
							<h3>Mentions</h3>
							<p>Manage your mentions</p>
						</div>
						<RightArrow />
					</div>

					<div className={`${styles.InteractionsBox} ${Story && styles.active}`} onClick={() => handelClicks("Story")}>
						<div>
							<h3>Story</h3>
							<p>Manage your story</p>
						</div>
						<RightArrow />
					</div>

					<div className={`${styles.InteractionsBox} ${Live && styles.active}`} onClick={() => handelClicks("Live")}>
						<div>
							<h3>Live</h3>
							<p>Manage your Live</p>
						</div>
						<RightArrow />
					</div>

					<div
						className={`${styles.InteractionsBox} ${Messages && styles.active}`}
						onClick={() => handelClicks("Messages")}>
						<div>
							<h3>Messages</h3>
							<p>Manage your Messages</p>
						</div>
						<RightArrow />
					</div>
				</div>
			</div>

			<div className={styles.RightPrivacyContainer}>
				<div className={styles.RightArrowDiv}>
					<RightArrow />
				</div>
				<div className={styles.AllComponentRenders}>
					{Comments && <Comment />}
					{Posts && <Post />}
					{Mentions && <Mention />}
					{Story && <Emagz />}
					{Live && <Emagz />}
					{Messages && <Emagz />}
				</div>
			</div>
		</div>
	);
};

export default Privacy;
