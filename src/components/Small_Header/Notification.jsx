import React from "react";
import profile1 from "../../assets/images/profile1.png";
import heartFill from "../../assets/svg/heartFill.svg";
import styles from "./SmallHeader.module.css";
const Notification = () => {
	return (
		<div className={styles.NotificationContainer}>
			<div className={styles.NotTop}>
				<h1>Notification</h1>
				<button type="button">Clear</button>
			</div>
			<div className={styles.NotMiddle}>
				{/* Map this "NotBox" 👇👇 */}
				<div className={styles.NotBox}>
					<div>
						<div>
							<img src={heartFill} alt="" />
						</div>
						<h5>
							Congrats
							<p>Your post has got 1k likes</p>
						</h5>
					</div>
					<p className={styles.timeText}>Now</p>
				</div>
				<div className={styles.NotBox}>
					<div>
						<div>
							<img src={profile1} alt="" />
						</div>
						<h5>
							Username
							<p>@username starting following you </p>
						</h5>
					</div>
					<p className={styles.timeText}>Now</p>
				</div>
				<div className={styles.NotBox}>
					<div>
						<div>
							<img src={heartFill} alt="" />
						</div>
						<h5>
							Congrats
							<p>Your post has got 1k likes</p>
						</h5>
					</div>
					<p className={styles.timeText}>Now</p>
				</div>
				<div className={styles.NotBox}>
					<div>
						<div>
							<img src={profile1} alt="" />
						</div>
						<h5>
							Username
							<p>@username starting following you </p>
						</h5>
					</div>
					<p className={styles.timeText}>Now</p>
				</div>
			</div>
			<button className={styles.NotBottom} type="button">
				Show all notification
			</button>
		</div>
	);
};

export default Notification;
