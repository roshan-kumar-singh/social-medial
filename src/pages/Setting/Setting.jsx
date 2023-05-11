import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import ProfileImage1 from "../../assets/images/ProfileImage1.jpg";
import CameraIcon from "../../assets/svg/CameraIcon.svg";
import RightArrow from "../../assets/svg/RightArrow";
import styles from "./Setting.module.css";

const Setting = () => {
	const navigate = useNavigate();
	const [ImageFile, setImageFile] = useState(null);
	const [ImageURL, setImageURL] = useState("");
	const ImageRef = useRef(null);
	const [ActiveStatus, setActiveStatus] = useState(true);
	const [EnableLocation, setEnableLocation] = useState(false)
	const [PlaySoundNotification, setPlaySoundNotification] = useState(false)
	const [Notification, setNotification] = useState(false)

	return (
		<div className={`${styles.Container} ${styles.Setting}`}>
			<div className={styles.LeftSettingContainer}>
				<h1 className={styles.SettingText}>Setting</h1>
				<h5 className={styles.AccountText}>Account</h5>
				<div className={styles.AccountDiv}>
					<div className={styles.AccountDivTop}>
						<div className={styles.ProfileImageContainer}>
							<div className={styles.ProfileImg}>
								<img src={ImageURL ? ImageURL : ProfileImage1} alt="" />
							</div>
							<button className={styles.SelectImageBtn} type="button" onClick={() => ImageRef.current.click()}>
								<img src={CameraIcon} alt="" />
							</button>
							<input
								type="file"
								accept="image/*"
								ref={ImageRef}
								onChange={(e) => {
									let file = e.target.files[0];
									if (file) {
										setImageFile(file);
										setImageURL(URL.createObjectURL(file));
									}
									e.target.value = null;
								}}
							/>
						</div>
						<div className={styles.NameContainer}>
							<h1>Rohan Mondal</h1>
							<p>@rohan_mondal05</p>
						</div>
					</div>
					<div className={styles.AccountDivBottom}>
						<h1>Bio</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat faucibus mattis lacus,
							dignissim. Sollicitudin eget ut enim, quis. Hendrerit.
						</p>
						<div className={styles.AccountDivBottomBottom}>
							<button type="button">Change to business account</button>
							<button type="button">Change Theme</button>
						</div>
					</div>
				</div>
				<div className={styles.ActiveContainer}>
					<h1 className={styles.ActiveText}>Active Status</h1>
					<p className={styles.ActiveTextP}>Your friends and contacts will see when you’re active </p>
					<div className={styles.SwitchContainer}>
						<Switch
							onChange={(e) => setActiveStatus(e)}
							checked={ActiveStatus}
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
						<p className={styles.SwitchText}>Show my friends and contact when i’m active</p>
					</div>
				</div>
				<button type="button" className={styles.LogOutBtn}>
					Log Out
				</button>
				<Link to="/Setting" className={styles.AddAccountText}>
					Add another account
				</Link>
			</div>

			<div className={styles.RightSettingContainer}>
				<h1 className={styles.PreferenceText}>Preference</h1>
				<div className={styles.PreferenceContainer} onClick={() => navigate("/Privacy")}>
					<div>
						<h3>Privacy</h3>
						<p>Manage your privacy</p>
					</div>
					<RightArrow />
				</div>
				<div className={styles.PreferenceContainer} onClick={() => navigate("/Security")}>
					<div>
						<h3>Security</h3>
						<p>Manage your security aand secure your profile</p>
					</div>
					<RightArrow />
				</div>
				<div className={styles.PreferenceContainerSwitch}>
					<h3 className={styles.h31}>Enable my location</h3>
					<Switch
						onChange={(e) => setEnableLocation(e)}
						checked={EnableLocation}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#297C45"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={30}
						width={64}
					/>
				</div>
				<div className={styles.PreferenceContainerSwitch}>
					<h3 className={styles.h32}>Play Sound When i get notification</h3>
					<Switch
						onChange={(e) => setPlaySoundNotification(e)}
						checked={PlaySoundNotification}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#297C45"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={30}
						width={64}
					/>
				</div>
				<div className={styles.PreferenceContainerSwitch}>
					<h3 className={styles.h33}>Enable Desktop notification</h3>
					<Switch
						onChange={(e) => setNotification(e)}
						checked={Notification}
						offColor={"#EEEEEE"}
						onColor={"#EEEEEE"}
						offHandleColor={"#959595"}
						onHandleColor={"#297C45"}
						uncheckedIcon={false}
						checkedIcon={false}
						activeBoxShadow={"0 0 0px 0px #909AFF"}
						height={30}
						width={64}
					/>
				</div>
				<div className={styles.BlockContainer}>
					<h1>Blocked Users</h1>
					<p>
						Once you blocked someone they will no longer to see things that you post on your feed , tag you , invite
						you or start a conversation with you. However you can unblock them later if you want{" "}
					</p>
					<Link to="/BlockedUser">Manage blocked users</Link>
				</div>
			</div>
		</div>
	);
};

export default Setting;
