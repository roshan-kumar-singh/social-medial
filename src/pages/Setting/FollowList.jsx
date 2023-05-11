import React, { useState } from "react";
import Profile from "../../assets/images/profileImage.jpg";
import search from "../../assets/svg/search.svg";
import styles from "./FollowList.module.css";

const FollowList = () => {
	const [followSate, setFollowSate] = useState(false);
    const [SearchText1, setSearchText1] = useState("");
    const [SearchText2, setSearchText2] = useState("");
    const [SearchShow1, setSearchShow1] = useState(false)
    const [SearchShow2, setSearchShow2] = useState(false)

	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	
    return (
		<div className={`${styles.Container} ${styles.FollowList}`}>
			<div className={styles.LeftFollowListContainer}>
				<div className={styles.SearchContainer}>
					<h4>Followers</h4>
					<div className={`${styles.search} ${SearchShow2 && styles.ActiveSearch}`}>
						<input
							type="search"
							placeholder="Search"
							value={SearchText2}
							onChange={(e) => setSearchText2(e.target.value)}
						/>
						<img src={search} alt="search" onClick={() => setSearchShow2(!SearchShow2)} />
					</div>
				</div>

				<div className={styles.ListContainer}>
					{data.map((data, index) => (
						<div key={index} className={styles.FollowBox}>
							<div className={styles.FollowLeft}>
								<img src={Profile} alt="" />
								<div>
									<h5>User Name</h5>
									<p>@userName</p>
								</div>
							</div>
							<button
								type="button"
								className={followSate && styles.active}
								onClick={() => setFollowSate(!followSate)}>
								{followSate ? "Following" : "Follow"}
							</button>
						</div>
					))}
				</div>
			</div>

			<div className={styles.RightFollowListContainer}>
				<div className={styles.SearchContainer}>
					<h4>Followers</h4>
					<div className={`${styles.search} ${SearchShow1 && styles.ActiveSearch}`}>
						<input
							type="search"
							placeholder="Search"
							value={SearchText1}
							onChange={(e) => setSearchText1(e.target.value)}
						/>
						<img src={search} alt="search" onClick={() => setSearchShow1(!SearchShow1)} />
					</div>
				</div>

				<div className={styles.ListContainer}>
					{data.map((data, index) => (
						<div key={index} className={styles.FollowBox}>
							<div className={styles.FollowLeft}>
								<img src={Profile} alt="" />
								<div>
									<h5>User Name</h5>
									<p>@userName</p>
								</div>
							</div>
							<button
								type="button"
								className={followSate && styles.active}
								onClick={() => setFollowSate(!followSate)}>
								{followSate ? "Following" : "Follow"}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FollowList;
