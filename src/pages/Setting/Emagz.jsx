import React, { useState } from "react";
import Switch from "react-switch";
import RightArrow from "../../assets/svg/RightArrow";
import styles from "./Privacy.module.css";

export const Emagz = () => {
	const [Everyone, setEveryone] = useState(true);
	const [CloseFriends, setCloseFriends] = useState(false);
	const [NoOne, setNoOne] = useState(false);

	return (
		<div className={styles.Emagz}>
			<h1>Emagz</h1>
			<h2>Hide your storys from</h2>
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
					onChange={(e) => setCloseFriends(e)}
					checked={CloseFriends}
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
			<div className={`${styles.AllowCommentsBox} ${styles.SpecificPerson}`}>
				<p>Specific Person</p>
				<RightArrow />
			</div>
		</div>
	);
};
