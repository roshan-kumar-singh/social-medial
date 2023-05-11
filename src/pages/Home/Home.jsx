import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import profile1 from "../../assets/images/profile1.png";
import send from "../../assets/svg/send.svg";
import SmallHeader from "../../components/Small_Header/SmallHeader";
import LiveIndex from "../Live/LiveIndex";
import DragAndDrop from "../Stories/DragAndDrop";
import PostImageContainer from "./PostImageContainer";
import StoryItem from "./StoryItem";
import styles from "./index.module.css";

const Home = () => {
	const [ImagePopup, setImagePopup] = useState(false);
	const [LivePopup, setLivePopup] = useState(false);
	const settings = {
		className: "center",
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 8,
		swipeToSlide: true,
		// slidesToScroll: 4,
		autoplay: true,
		pauseOnHover: true,
		speed: 2000,
		autoplaySpeed: 500,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			{ImagePopup && <DragAndDrop setImagePopup={setImagePopup} />}
			{LivePopup && <LiveIndex setLivePopup={setLivePopup} />}

			<div className={`${styles.Container} ${styles.Home}`}>
				<SmallHeader />
				<div className={styles.homeContainer}>
					<div className={styles.sliderContainer}>
						<Slider {...settings} className={styles.customSlick}>
							<StoryItem
								// image={
								// 	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								// }
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
							<StoryItem
								image={
									"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPHTmmVWas1CnkulXrkRuBz4HC2a9VRzbQ&usqp=CAU"
								}
								name="user 1"
							/>
						</Slider>
					</div>

					<div className={styles.imagesMainContainer}>
						<div className={styles.homeLeftContainer}>
							<PostImageContainer image={image1} profile={profile1} />
							<PostImageContainer image={image2} profile={profile1} />
							<PostImageContainer image={image3} profile={profile1} />
							<PostImageContainer image={image1} profile={profile1} />
							<PostImageContainer image={image2} profile={profile1} />
							<PostImageContainer image={image3} profile={profile1} />
						</div>

						<div className={styles.homeRightContainer}>
							<div className={styles.messageBox}>
								<div className={styles.searchSection2}>
									<form>
										<input type="text" placeholder="Type something" />
										<button type="button">
											<img src={send} />
										</button>
									</form>
									<ul>
										<li>
											<Link onClick={() => setImagePopup(true)}>Image</Link>
										</li>
										<li>
											<Link to="/">Video</Link>
										</li>
										<li>
											<Link onClick={() => setLivePopup(true)}>Stream</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className={styles.staticImageContainer}>
								<div className={styles.imageBox1}>
									<img src={image3} alt="image3" />
								</div>
								<div className={styles.imageBox2}>
									<img src={image4} alt="image4" />
								</div>
								<div className={styles.imageBox3}>
									<img src={image5} alt="image5" />
								</div>
								<div className={styles.imageBox4}>
									<img src={image6} alt="image6" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
