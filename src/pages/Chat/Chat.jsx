import React, { useState } from "react";
import EP1 from "../../assets/images/EP1.jpg";
import EP2 from "../../assets/images/EP2.jpg";
import EP3 from "../../assets/images/EP3.jpg";
import SettingIcon from "../../assets/svg/SettingIcon.svg";
import SearchIcon from "../../assets/svg/search.svg";
import ActiveChat from "./ActiveChat";
import styles from "./Chat.module.css";
import ChatMessageRequest from "./ChatMessageRequest";
import ChatSetting from "./ChatSetting";

export const data = [
	{ _id: "01", name: "Rohan", resentMessage: "Hey, How are you ?", profilePic: EP2, recentSMS_Count: 1, time: "10:00am" },
	{ _id: "02", name: "UserName", resentMessage: "Hey, How ru ?", profilePic: EP3, recentSMS_Count: null, time: "9:00am" },
	{ _id: "03", name: "UserName2", resentMessage: "Heyyyy", profilePic: EP1, recentSMS_Count: null, time: "8:00am" },
	{ _id: "04", name: "Rohan", resentMessage: "Hey, How are you ?", profilePic: EP2, recentSMS_Count: 1, time: "10:00am" },
	{ _id: "05", name: "UserName", resentMessage: "Hey, How ru ?", profilePic: EP3, recentSMS_Count: null, time: "9:00am" },
	{ _id: "06", name: "UserName2", resentMessage: "Heyyyy", profilePic: EP1, recentSMS_Count: null, time: "8:00am" },
	{ _id: "07", name: "Rohan", resentMessage: "Hey, How are you ?", profilePic: EP2, recentSMS_Count: 1, time: "10:00am" },
	{ _id: "08", name: "UserName", resentMessage: "Hey, How ru ?", profilePic: EP3, recentSMS_Count: null, time: "9:00am" },
	{ _id: "09", name: "UserName2", resentMessage: "Heyyyy", profilePic: EP1, recentSMS_Count: null, time: "8:00am" },
];

export const Chat = () => {
	const [Search, setSearch] = useState("");
	const [ActiveChatId, setActiveChatID] = useState(data[0]._id);
	const [SettingPopup, setSettingPopup] = useState(false);
	const [MessageRequest, setMessageRequest] = useState(false);

	return (
		<div className={`${styles.Container} ${styles.Chat}`}>
			<div className={styles.LeftChatContainer}>
				<h1 className={styles.ChatText}>Chat</h1>

				<div className={styles.SearchSettingContainer}>
					<div className={styles.SearchContainer}>
						<input type="search" placeholder="Search" value={Search} onChange={(e) => setSearch(e.target.value)} />
						<img src={SearchIcon} alt="" />
					</div>
					<div className={styles.SettingIcon}>
						<img
							src={SettingIcon}
							alt=""
							onClick={() => {
								setSettingPopup(!SettingPopup);
								setMessageRequest(false);
							}}
						/>
					</div>
				</div>

				<div className={styles.OnlineContainer}>
					<h2>Online</h2>

					<div className={styles.OnlineBoxContainer}>
						<div className={styles.OnlineBox}>
							<img src={EP1} alt="" />
							<div className={styles.greenDot} />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP2} alt="" />
							<div className={styles.greenDot} />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP3} alt="" />
							<div className={styles.greenDot} />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP1} alt="" />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP2} alt="" />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP3} alt="" />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP3} alt="" />
							<div className={styles.greenDot} />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP1} alt="" />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP2} alt="" />
						</div>
						<div className={styles.OnlineBox}>
							<img src={EP3} alt="" />
						</div>
					</div>
				</div>

				<div className={styles.ChatProfileContainer}>
					{data.map((data, index) => (
						<div key={index} className={styles.ChatProfileBox} onClick={() => {
							setSettingPopup(false);
							setMessageRequest(false);
							setActiveChatID(data._id)
						}}>
							<div className={styles.ChatProfileBoxLeft}>
								<div className={styles.ChatProfileImage}>
									<img src={data.profilePic} alt="" />
									<div className={styles.greenDot} />
								</div>
								<div className={styles.ChatProfileText}>
									<h2>{data.name}</h2>
									<h5>{data.resentMessage}</h5>
								</div>
							</div>
							{data.recentSMS_Count ? <span>{data.recentSMS_Count}</span> : <p>{data.time}</p>}
						</div>
					))}
				</div>
			</div>

			<div className={styles.RightChatContainer}>
				{SettingPopup ? (
					<ChatSetting setMessageRequest={setMessageRequest} setSettingPopup={setSettingPopup} />
				) : MessageRequest ? (
					<ChatMessageRequest />
				) : (
					<ActiveChat ActiveChatId={ActiveChatId} />
				)}
			</div>
		</div>
	);
};
