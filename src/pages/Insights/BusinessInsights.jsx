import React from "react";
import styles from "./Insights.module.css";
import Chart from "./Chart";

const BusinessInsights = () => {
	const data = [
		{ name: "Facebook", value: 50, fill: "#3b599d" },
		{ name: "Instagram", value: 80, fill: "#dc2743" },
		{ name: "Twitter", value: 70, fill: "#00acee" },
		{ name: "WhatsApp", value: 60, fill: "#25D366" },
	];
	return (
		<div className={`${styles.Container} ${styles.Insights}`}>
			<div className={styles.InsightsContainer}>
				<div className={styles.InsightsLeft}>
					<h1>Profile Insights</h1>
					<h4>Take a deep look at how your account and content are performing</h4>
					<div className={styles.GraphContainer}>
						<Chart data={data} />
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

export default BusinessInsights;
