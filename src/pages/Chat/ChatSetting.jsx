import React, { useState } from "react";
import Switch from "react-switch";
import RightArrow from "../../assets/svg/RightArrow";
import SearchIcon from "../../assets/svg/search.svg";
import styles from "./Chat.module.css";

const ChatSetting = ({ setMessageRequest, setSettingPopup }) => {
	const [Everyone, setEveryone] = useState(true);
	const [PeopleFollow, setPeopleFollow] = useState(false);
	const [NoOne, setNoOne] = useState(false);
	const [Search, setSearch] = useState("");

	return (
		<div className={styles.ChatSettingContainer}>
			<h1 className={styles.MSettingText}>Message Settings</h1>
			<button
				className={styles.MRBtn}
				type="button"
				onClick={() => {
					setMessageRequest(true);
					setSettingPopup(false);
				}}>
				<div>
					<h2>Message Request</h2>
					<p>See who all sent you a request</p>
				</div>
				<span>40+</span>
			</button>

			<h2 className={styles.ChatSettingText}>Chat Setting</h2>

			<div className={styles.ChatSettingTextContainer}>
				<h3 className={styles.ControlText}>Control</h3>
				<div className={styles.InnerControlText}>
					<h4>Allow Message from</h4>
					<div>
						<p>Everyone</p>
						<RightArrow />
					</div>
				</div>
				<div className={styles.InnerControlText}>
					<span>
						<h4>Block Message from</h4>
						<h6>Any message from people you block will not be visible to anyone but them</h6>
					</span>
					<div>
						<p>0 people</p>
						<RightArrow />
					</div>
				</div>
			</div>

			<div className={styles.AllowMessageFrom}>
				<h5>Allow Message request from</h5>
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

			<div className={styles.BlockMessageFromCont}>
				<h4>Block Message from</h4>
				<div>
					<img src={SearchIcon} alt="SearchIcon" />
					<input type="search" placeholder="Search" value={Search} onChange={(e) => setSearch(e.target.value)} />
				</div>
			</div>
		</div>
	);
};

export default ChatSetting;
