import React from "react";
import { data } from "./Chat";
import styles from "./Chat.module.css";

const ChatMessageRequest = () => {
	return (
		<div className={styles.MessageRequestContainer}>
			<h1 className={styles.MessageRequestText}>Message Request</h1>
			<h2 className={styles.MessageRequestText2}>Message Request</h2>
			<select className={styles.SelectMessageReq}>
				<option value="latest">Latest</option>
				<option value="old">Old</option>
			</select>
			<div className={styles.MessageRequestBoxContainer}>
				{data.map((data, index) => (
					<div key={index} className={styles.MessageRequestBox}>
						<div className={styles.CMRLeft}>
							<img src={data.profilePic} alt="" />
							<div>
								<h4>{data.name}</h4>
								<h3>{data.resentMessage}</h3>
							</div>
						</div>
						<div className={styles.CMRRight}>
							<button type="button">Accept Request</button>
							<button type="button">Reject & Block</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChatMessageRequest;
