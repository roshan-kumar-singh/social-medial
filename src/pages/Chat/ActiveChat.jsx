import React, { useRef, useState } from "react";
import ClipIcon from "../../assets/svg/ClipIcon.svg";
import SendIcon from "../../assets/svg/SendIcon.svg";
import SmileyIcon from "../../assets/svg/SmileyIcon.svg";
import ThreeDotIcon from "../../assets/svg/ThreeDotIcon.svg";
import { data } from "./Chat";
import styles from "./Chat.module.css";

const ActiveChat = ({ ActiveChatId }) => {
	const [Popup, setPopup] = useState(false);
	const [InputText, setInputText] = useState("");
	const [FileSelected, setFileSelected] = useState(null);
	const fileRef = useRef();

	const user = data.find((e) => e._id === ActiveChatId);

	const handelSentBtn = () => {
		console.log(InputText);
		console.log(FileSelected);
		setInputText("");
		setFileSelected(null);
	};

	return (
		<div className={styles.ActiveChatContainer}>
			<div className={styles.ActiveChatProfileContainer}>
				<div className={styles.ActiveChatProfileLeft}>
					<img src={user.profilePic} alt="ProfileImage" />
					<div>
						<h1>{user.name}</h1>
						<h6>Online</h6>
					</div>
				</div>
				<img
					src={ThreeDotIcon}
					alt="ThreeDotIcon"
					style={{ cursor: "pointer", padding: ".5rem" }}
					onClick={() => setPopup(!Popup)}
				/>
			</div>

			<div className={`${styles.ThreeDotPopupContainer} ${Popup && styles.ActiveThreeDotPopup}`}>
				<div className={styles.ThreeDotButtonContainer}>
					<button type="button" onClick={() => setPopup(false)}>
						Report User
					</button>
					<button type="button" onClick={() => setPopup(false)}>
						Block User
					</button>
				</div>
			</div>

			<div className={styles.ActiveChatSMSContainer}>
				<div className={styles.ChatBoxMy}>
					<div className={styles.MyChatBox}>
						Hey, How are you making the post
						<span>10:00 AM</span>
					</div>
				</div>
				<div className={styles.ChatBoxYou}>
					<div className={styles.YourChatBox}>
						Hey, Yea by giving the issue
						<span>10:00 AM</span>
					</div>
				</div>
				<div className={styles.ChatBoxYou}>
					<div className={styles.YourChatBox}>
						Hey, Yea by giving the issue
						<span>10:00 AM</span>
					</div>
				</div>
				<h4>Yeasted</h4>
				<div className={styles.ChatBoxMy}>
					<div className={styles.MyChatBox}>
						Oh Great, Thanks For Teaching
						<span>10:00 AM</span>
					</div>
				</div>
				<div className={styles.ChatBoxMy}>
					<div className={styles.MyChatBox}>
						Oh Great, Thanks For Teaching
						<span>10:00 AM</span>
					</div>
				</div>
				<h4>Today</h4>
				<div className={styles.ChatBoxYou}>
					<div className={styles.YourChatBox}>
						Hey, Yea by giving the issue
						<span>10:00 AM</span>
					</div>
				</div>
				<div className={styles.ChatBoxMy}>
					<div className={styles.MyChatBox}>
						Oh Great, Thanks For Teaching
						<span>10:00 AM</span>
					</div>
				</div>
			</div>

			<div className={styles.ActiveChatInputContainer}>
				<img src={SmileyIcon} alt="emoji" />
				<img src={ClipIcon} alt="clip" onClick={() => fileRef.current.click()} />
				<input
					type="file"
					ref={fileRef}
					style={{ display: "none" }}
					onChange={(e) => {
						let file = e.target.files[0];
						setFileSelected(file);
						e.target.value = null;
					}}
				/>
				<input
					type="text"
					placeholder="Type something "
					value={InputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<button type="button" className={styles.SendButton} onClick={handelSentBtn}>
					<img src={SendIcon} alt="SendIcon" />
				</button>
			</div>
		</div>
	);
};

export default ActiveChat;
