import React from "react";
import { useNavigate } from "react-router-dom";
import background1 from "../../assets/images/Background1.jpg";
import profile from "../../assets/images/profile1.png";
import styles from "./LiveIndex.module.css";

const LiveAgain = ({ setLivePopup, setGoLiveShow, setLiveAgainShow, setLiveShowShow }) => {
	const navigate = useNavigate();
	return (
		<div className={styles.LiveMainContainer}>
			<div className={styles.LiveClose} onClick={() => setLivePopup(false)}></div>
			<div className={styles.LiveContainer}>
				<div className={styles.LiveInnerContainer}>
					<div className={styles.ImageContainer}>
						<div className={styles.ImageBox}>
							<img src={background1} alt="" />
						</div>
						<div className={`${styles.TextBox} ${styles.TextBox2}`}>Live as ended in 2Hrs </div>
					</div>

					<div className={styles.DescContainer}>
						<p>Describe your feeling</p>
						<textarea
							defaultValue={
								"Lorem ipsum dolor sit amet consectetur. Nulla ac tortor vitae ac gravida tempus. Mi integer duis sit amet et."
							}></textarea>
						<span>01/32</span>
					</div>

					<div className={styles.FollowersContainer}>
						<div className={styles.topBox}>
							<p>450 People Were Watching Your Live</p>
						</div>
						{/* Map This Container 👇👇 */}
						<div className={styles.FollowersBox}>
							<div className={styles.LeftFollow}>
								<img src={profile} alt="" />
								<div>
									<h3>User name </h3>
									<h4>@userName</h4>
								</div>
							</div>
						</div>
						<div className={styles.FollowersBox}>
							<div className={styles.LeftFollow}>
								<img src={profile} alt="" />
								<div>
									<h3>User name </h3>
									<h4>@userName</h4>
								</div>
							</div>
						</div>
						<div className={styles.FollowersBox}>
							<div className={styles.LeftFollow}>
								<img src={profile} alt="" />
								<div>
									<h3>User name </h3>
									<h4>@userName</h4>
								</div>
							</div>
						</div>
						<div className={styles.FollowersBox}>
							<div className={styles.LeftFollow}>
								<img src={profile} alt="" />
								<div>
									<h3>User name </h3>
									<h4>@userName</h4>
								</div>
							</div>
						</div>
						<div className={styles.FollowersBox}>
							<div className={styles.LeftFollow}>
								<img src={profile} alt="" />
								<div>
									<h3>User name </h3>
									<h4>@userName</h4>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button
					type="button"
					className={styles.GoLiveBtnContainer}
					onClick={() => {
						setGoLiveShow(false);
						setLiveShowShow(true);
						setLiveAgainShow(false);
					}}>
					Go Live Again
				</button>
			</div>
		</div>
	);
};

export default LiveAgain;
