import React from "react";
import styles from "./Insights.module.css";

const AudienceInsights = () => {
	return (
		<div className={`${styles.Container} ${styles.Insights}`}>
			<div className={styles.InsightsContainer}>
				<div className={styles.InsightsLeft}>
					<h1>Profile Insights</h1>
					<h4>Take a deep look at how your account and content are performing</h4>
					<div className={styles.AudienceInsights}>
						<div className={styles.AudienceInsightsTop}>
							<h5>
								Audience Base
								<p>Take a deep look on your audience</p>
							</h5>
							<select>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>

						<div className={styles.AudienceInsightsBottom}>
							<div className={styles.AudienceBottomLeftRight}>
								<p>Location</p>

								<div className={styles.bottomGroup}>
									<div>
										<p>USA</p>
										<p>14%</p>
									</div>
									<span>
										<p style={{ width: "14%" }}></p>
									</span>
								</div>

								<div className={styles.bottomGroup}>
									<div>
										<p>India</p>
										<p>84%</p>
									</div>
									<span>
										<p style={{ width: "84%" }}></p>
									</span>
								</div>
								<div className={styles.bottomGroup}>
									<div>
										<p>Australia</p>
										<p>14%</p>
									</div>
									<span>
										<p style={{ width: "14%" }}></p>
									</span>
								</div>

								<button>View All</button>
							</div>

							<div className={styles.AudienceBottomLeftRight}>
								<p>Age</p>
								<div className={styles.bottomGroup}>
									<div>
										<p>Male</p>
										<p>14%</p>
									</div>
									<span>
										<p style={{ width: "14%" }}></p>
									</span>
								</div>
								<div className={styles.bottomGroup}>
									<div>
										<p>Female</p>
										<p>44%</p>
									</div>
									<span>
										<p style={{ width: "44%" }}></p>
									</span>
								</div>
								<button>View All</button>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.InsightsRight}>
					<select>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>

					<div className={styles.InsightsBoxContainer}>
						<div className={`${styles.InsightsBox} ${styles.active}`}>
							<h1>120K</h1>
							<p>Persona reached</p>
						</div>
						<div className={styles.InsightsBox}>
							<h1>12K</h1>
							<p>Influence</p>
						</div>
						<div className={styles.InsightsBox}>
							<h1>120K</h1>
							<p>Persona Views</p>
						</div>
						<div className={styles.InsightsBox}>
							<h1>12K</h1>
							<p>Influence</p>
						</div>
						<div className={styles.InsightsBox}>
							<h1>120K</h1>
							<p>Persona Views</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudienceInsights;
