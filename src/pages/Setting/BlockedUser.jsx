import React, { useState } from "react";
import Profile from "../../assets/images/profileImage.jpg";
import styles from "./BlockedUser.module.css";
import LeftArrowIcon from "../../assets/svg/LeftArrowIcon.svg"

const BlockedUser = () => {
	const [blockStatus, setBlockStatus] = useState(false);
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	return (
		<div className={`${styles.Container} ${styles.BlockedUser}`}>
			<div className={styles.LeftBlockedUserContainer}>
				<h1 className={styles.BlockedUserText}>Blocked User</h1>
				<h3 className={styles.BlockedUserDetail}>List of all the account that you have blocked</h3>
				{data.map((data, index) => (
					<div key={index} className={styles.BlockUserBox}>
						<div className={styles.BlockBoxLeft}>
							<img src={Profile} alt="" />
							<div>
								<h5>User Name</h5>
								<p>U have blocked on 22 - Jun</p>
							</div>
						</div>
						<button type="button" onClick={() => setBlockStatus(!blockStatus)}>
							{blockStatus ? "Block" : "Unblock"}
						</button>
					</div>
				))}
			</div>

			<div className={styles.RightBlockedUserContainer}>
				<div className={styles.LeftArrow}>
					<img src={LeftArrowIcon} alt="" />
				</div>

				<h1 className={styles.Note}>Note</h1>
				<p className={styles.NoteText}>
					Once you blocked someone they will no longer to see things that you post on your feed , tag you , invite you
					or start a conversation with you. However you can unblock them later if you want{" "}
                </p>
                <h1 className={styles.BlockedPagesText}></h1>

				<div className={styles.BlockPageContainer}>
					{data.map((data, index) => (
						<div key={index} className={styles.BlockUserBox}>
							<div className={styles.BlockBoxLeft}>
								<img src={Profile} alt="" />
								<div>
									<h5>User Name</h5>
									<p>U have blocked on 22 - Jun</p>
								</div>
							</div>
							<button type="button" onClick={() => setBlockStatus(!blockStatus)}>
								{blockStatus ? "Block" : "Unblock"}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlockedUser;
