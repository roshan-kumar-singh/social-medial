import React, { useState } from "react";
import Switch from "react-switch";
import styles from "./Privacy.module.css";

export const Mention = () => {
	const [Everyone, setEveryone] = useState(true);
	const [PeopleFollow, setPeopleFollow] = useState(false);
    const [NoOne, setNoOne] = useState(false);
    
	return (
		<div className={styles.Mentions}>
			<h1>Mentions</h1>
			<h2>Allow @mentions from</h2>
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
	);
};
