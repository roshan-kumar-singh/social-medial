import React from "react";
import EP1 from "../../assets/images/EP1.jpg";
import EP2 from "../../assets/images/EP2.jpg";
import EP3 from "../../assets/images/EP3.jpg";
import EP4 from "../../assets/images/EP4.jpg";
import EP5 from "../../assets/images/EP5.jpg";
import EP6 from "../../assets/images/EP6.jpg";
import EP7 from "../../assets/images/EP7.jpg";
import styles from "./Explore.module.css";
const ExploreYourWorld = () => {
	return (
		<>
			<h1>Explore your world</h1>
			<div className={styles.recommendedContainer}>
				<p>Recommend For you</p>
				<div className={styles.recommendedDiv}>
					{/* FIXME: Start */}
					<div className={styles.HorizontalScroll}>
						<img src={EP1} alt="" />
						<img src={EP2} alt="" />
						<img src={EP3} alt="" />
						<img src={EP1} alt="" />
						<img src={EP2} alt="" />
						<img src={EP3} alt="" />
					</div>
					{/* FIXME: End */}
				</div>
			</div>

			<div className={styles.ExploreImageMainContainer}>
				<h3>Explore</h3>
                <div className={styles.ExploreImageContainer}>
                    <img src={EP4} alt="" className={styles.row2 } />
                    <img src={EP4} alt="" className={styles.row21 } />
                    <img src={EP5} alt="" />
                    <img src={EP6} alt="" />
                    <img src={EP7} alt="" />
                    <img src={EP5} alt="" />
                    <img src={EP6} alt="" />
                    <img src={EP7} alt="" />
                    <img src={EP5} alt="" />
                    <img src={EP6} alt="" />
                    <img src={EP7} alt="" />
                    <img src={EP5} alt="" />
                    <img src={EP6} alt="" />














                </div>
			</div>
		</>
	);
};

export default ExploreYourWorld;
