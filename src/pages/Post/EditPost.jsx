import React, { useState } from "react";
import Switch from "react-switch";
import Background1 from "../../assets/images/Background1.jpg";
import SmallHeader from "../../components/Small_Header/SmallHeader";
import EnablePollContainer from "./EnablePollContainer";
import styles from "./Post.module.css";

const EditPost = () => {
	const [value, setValue] = useState(false);
	const [everyone, setEveryone] = useState(false);
	const [people, setPeople] = useState(false);
	const [noOne, setNoOne] = useState(false);
	const [yes, setYes] = useState(70);
	const [no, setNo] = useState(30);

	return (
		<div className={`${styles.Container} ${styles.Post}`}>
			<SmallHeader />
			<div className={styles.EditPostBody}>
				<div className={styles.EditPostBodyLeft}>
					<div className={styles.EditPostBox}>
						<div className={styles.ImageContainer}>
							<img src={Background1} alt="" />
						</div>
						<h1>Edit Post</h1>
					</div>

					<div className={styles.LeftBottom}>
						{!value ? (
							<div className={styles.EnablePollMainContainer}>
								<EnablePollContainer />
								<div className={styles.ShowPollResult}>
									<p>Enable Poll</p>
									<Switch
										onChange={(e) => setValue(e)}
										checked={value}
										offColor={"#c4c4c4"}
										onColor={"#909AFF"}
										offHandleColor={"#959595"}
										onHandleColor={"#2E5EE2"}
										uncheckedIcon={false}
										checkedIcon={false}
										activeBoxShadow={"0 0 0px 0px #909AFF"}
										height={30}
										width={64}
									/>
								</div>
							</div>
						) : (
							<div className={styles.PollContainer}>
								<p>See Analytics</p>
								<div className={styles.PollsCont}>
									<label htmlFor="yes">
										YES{" "}
										<input
											type="range"
											id="yes"
											max={100}
											min={0}
											value={yes}
											onChange={(e) => setYes(e.target.value)}
										/>
										<p>{yes}%</p>
									</label>
									<label htmlFor="no">
										NO{" "}
										<input
											type="range"
											id="no"
											max={100}
											min={0}
											value={no}
											onChange={(e) => setNo(e.target.value)}
										/>
										<p>{no}%</p>
									</label>
								</div>
							</div>
						)}
					</div>
				</div>

				<div className={styles.EditPostBodyRight}>
					<div className={styles.RightInner}>
						{/* <EnablePollContainer /> */}

						{/* 👇 Make this Hidden when EnablePollContainer Enable 👇 */}
						<div className={styles.SetTimerContainer}>
							<p>Set Timer</p>
							<div className={styles.SetTimerInner}>
								<div className={styles.SetTimerInnerLeft}>
									<div className={styles.dates}>1D</div>
									<div className={styles.dates}>2D</div>
									<div className={styles.dates}>7D</div>
								</div>
								<div className={styles.SetTimerInnerRight}>Set Custom</div>
							</div>
						</div>
						{/* 👆 Make this Hidden when EnablePollContainer Enable 👆 */}

						<div className={styles.describeContainer}>
							<p>Describe your feeling</p>
							<textarea></textarea>
						</div>
						<div className={styles.PostContainer}>
							<p>Post Setting</p>
							<div className={styles.PostCont1}>
								<h2>Post</h2>
								<div className={styles.PostCont1Inn}>
									<h5>Likes & View</h5>
									<p>Everyone {">"} </p>
								</div>
								<div className={styles.PostCont1Inn}>
									<h5>Hide like & views control</h5>
									<p>0 people {">"} </p>
								</div>
							</div>
							<div className={styles.PostCont2}>
								<p>Allow Tag from</p>
								<div className={styles.PostCont2Inn}>
									<h2>Everyone</h2>
									<Switch
										onChange={(e) => setEveryone(e)}
										checked={everyone}
										offColor={"#eee"}
										onColor={"#eee"}
										offHandleColor={"#959595"}
										onHandleColor={"#3A0DBB"}
										uncheckedIcon={false}
										checkedIcon={false}
										activeBoxShadow={"0 0 0px 0px #909AFF"}
										height={14}
										width={33}
									/>
								</div>
								<div className={styles.PostCont2Inn}>
									<h2>People you follow</h2>
									<Switch
										onChange={(e) => setPeople(e)}
										checked={people}
										offColor={"#eee"}
										onColor={"#eee"}
										offHandleColor={"#959595"}
										onHandleColor={"#3A0DBB"}
										uncheckedIcon={false}
										checkedIcon={false}
										activeBoxShadow={"0 0 0px 0px #909AFF"}
										height={14}
										width={33}
									/>
								</div>
								<div className={styles.PostCont2Inn}>
									<h2>No one</h2>
									<Switch
										onChange={(e) => setNoOne(e)}
										checked={noOne}
										offColor={"#eee"}
										onColor={"#eee"}
										offHandleColor={"#959595"}
										onHandleColor={"#3A0DBB"}
										uncheckedIcon={false}
										checkedIcon={false}
										activeBoxShadow={"0 0 0px 0px #909AFF"}
										height={14}
										width={33}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPost;
