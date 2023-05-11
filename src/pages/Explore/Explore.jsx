import React, { useState } from "react";
import AddImage from "../../assets/images/AddImage.jpg";
import EP1 from "../../assets/images/EP1.jpg";
import EP2 from "../../assets/images/EP2.jpg";
import EP3 from "../../assets/images/EP3.jpg";
import search from "../../assets/svg/search.svg";
import SmallHeader from "../../components/Small_Header/SmallHeader";
import styles from "./Explore.module.css";
import ExploreYourMind from "./ExploreYourMind";
import ExploreYourWorld from "./ExploreYourWorld";
const Explore = () => {
	const [Travel, setTravel] = useState(false);
	const [Funny, setFunny] = useState(false);
	const [Photography, setPhotography] = useState(false);
	const [News, setNews] = useState(false);
	const [Pets, setPets] = useState(false);
	const [RoadTrip, setRoadTrip] = useState(false);
	return (
		<div className={`${styles.Container} ${styles.Explore}`}>
			<SmallHeader />
			<div className={styles.ExploreContainer}>
				<div className={styles.ExploreLeft}>
					<ExploreYourWorld />
					<ExploreYourMind />
				</div>

				<div className={styles.ExploreRight}>
					<div className={styles.InputContainer}>
						<input type="text" placeholder="Search" />
						<img src={search} alt="" />
					</div>
					<div className={styles.TagContainer}>
						<p>Tags For you</p>
						<div className={styles.btnContainer}>
							<button
								type="button"
								style={{ background: Travel ? "#3A0DBB" : "", color: Travel ? "#fff" : "" }}
								onClick={() => setTravel(!Travel)}>
								Travel
							</button>
							<button
								type="button"
								style={{ background: Funny ? "#3A0DBB" : "", color: Funny ? "#fff" : "" }}
								onClick={() => setFunny(!Funny)}>
								Funny
							</button>
							<button
								type="button"
								style={{ background: Photography ? "#3A0DBB" : "", color: Photography ? "#fff" : "" }}
								onClick={() => setPhotography(!Photography)}>
								Photography
							</button>
							<button
								type="button"
								style={{ background: News ? "#3A0DBB" : "", color: News ? "#fff" : "" }}
								onClick={() => setNews(!News)}>
								News
							</button>
							<button
								type="button"
								style={{ background: Pets ? "#3A0DBB" : "", color: Pets ? "#fff" : "" }}
								onClick={() => setPets(!Pets)}>
								Pets
							</button>
							<button
								type="button"
								style={{ background: RoadTrip ? "#3A0DBB" : "", color: RoadTrip ? "#fff" : "" }}
								onClick={() => setRoadTrip(!RoadTrip)}>
								RoadTrip
							</button>
						</div>
					</div>
					<div className={styles.ScrollCont}>
						<div className={styles.AddContainer}>
							<img src={AddImage} alt="" />
						</div>
						<div className={styles.LikeContainer}>
							<p>You may like</p>
							<div className={styles.LikeImages}>
								<img src={EP1} alt="" />
								<img src={EP2} alt="" />
								<img src={EP3} alt="" />
								<img src={EP1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Explore;
