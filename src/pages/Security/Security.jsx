import { useState } from "react";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import arrow from "../../assets/images/Vector.png";
import share from "../../assets/svg/external-link-line.svg";
import Items from "./Information Items/Items";
import Deactivate from "./Security modal/Deactivate/Deactivate";
import Privacy from "./Security modal/Privacy/Privacy";
import TermsAndCondition from "./Security modal/Terms and condition/Terms&Condition";
import TwoWayVerification from "./Security modal/Two way verification/TwoWayVerification";
import UpdateAddress from "./Security modal/Update Address/UpdateAddress";
import UpdateDob from "./Security modal/Update DOB/UpdateDob";
import UpdateEmail from "./Security modal/Update Email/UpdateEmail";
import UpdateName from "./Security modal/Update Name/UpdateName";
import UpdateMobileNo from "./Security modal/Update mobile No/UpdateMobileNo";
import classes from "./Security.module.css";
import SecurityItem from "./security Item/SecurityItem";

const Security = () => {
	const [showName, setShowName] = useState(false);
	const [showMobileNo, setShowMobileNo] = useState(false);
	const [showDate, setShowDate] = useState(false);
	const [showEmail, setShowEmail] = useState(false);
	const [showAddress, setShowAddress] = useState(false);
	const [showTerms, setShowTerms] = useState(false);
	const [showPrivacy, setShowPrivacy] = useState(false);
	const [deactivate, setDeactivate] = useState(false);
	const [verification, setVerification] = useState(false);

	const hideModalHandler = () => {
		if (setShowName(false)) return;
		if (setShowMobileNo(false)) return;
		if (setShowDate(false)) return;
		if (setShowEmail(false)) return;
		if (setShowAddress(false)) return;
		if (setShowTerms(false)) return;
		if (setShowPrivacy(false)) return;
		if (setDeactivate(false)) return;
		if (setVerification(false)) return;
	};

	return (
		<div className={classes.container}>
			{showName && <UpdateName onClose={hideModalHandler} state={setShowName} />}
			{showMobileNo && <UpdateMobileNo onClose={hideModalHandler} />}
			{showDate && <UpdateDob onClose={hideModalHandler} />}
			{showEmail && <UpdateEmail onClose={hideModalHandler} />}
			{showAddress && <UpdateAddress onClose={hideModalHandler} />}
			{showTerms && <TermsAndCondition onClose={hideModalHandler} />}
			{showPrivacy && <Privacy onClose={hideModalHandler} />}
			{deactivate && <Deactivate onClose={hideModalHandler} />}
			{verification && <TwoWayVerification onClose={hideModalHandler} />}
			<div className={classes.header}>
				<p>Security</p>
				<button>
					<img src={arrow} alt="" />
				</button>
			</div>
			<div className={classes["main-content"]}>
				<section className={classes.info}>
					<p className={classes.heading}>Personal Information</p>
					<ul>
						<Items heading="Name" content="Jhon Wick" onClick={() => setShowName(true)} />
						<Items heading="Date Of Birth" content="21-May-1917" onClick={() => setShowDate(true)} />
						<Items heading="Email" content="Jhonwick@gmail.com" onClick={() => setShowEmail(true)} />
						<Items heading="Mobile Number" content="+91 009009090" onClick={() => setShowMobileNo(true)} />
						<Items heading="Address" content="Lorem ipsum dolor sit amet" onClick={() => setShowAddress(true)} />
					</ul>
				</section>
				<section className={classes.info}>
					<p className={classes.heading}>Other Security</p>
					<ul>
						<SecurityItem
							className={classes.varification}
							heading="Two way Verification"
							content="Secure your account even more with Two-Way-Verification"
							action={
								<Switch
									onChange={(e) => setVerification(e)}
									checked={verification}
									offColor={"#D1D5FF"}
									onColor={"#909AFF"}
									offHandleColor={"#A69F9F"}
									onHandleColor={"#2E5EE2"}
									uncheckedIcon={false}
									checkedIcon={false}
									activeBoxShadow={"0 0 0px 0px #909AFF"}
									height={24}
									width={48}
								/>
							}
						/>
						<SecurityItem
							onClick={() => setShowPrivacy(true)}
							heading="Privacy Policy"
							content="Learn about our privacy policy"
							action={<img src={share} alt="" />}
						/>
						<SecurityItem
							onClick={() => setShowTerms(true)}
							heading="Term's of use"
							content="Learn about our terms and condition"
							action={<img src={share} alt="" />}
						/>
						<SecurityItem
							heading="Help & Support"
							content="Need help connect with our support team"
							action={
								<NavLink>
									<img src={share} alt="" />
								</NavLink>
							}
						/>
						<SecurityItem
							className={classes.deactive}
							heading="Deactivate Account"
							content="I like to deactivate account "
							action={
								<Switch
									onChange={(e) => setDeactivate(e)}
									checked={deactivate}
									offColor={"#FF7C7C"}
									onColor={"#909AFF"}
									offHandleColor={"#FFF"}
									onHandleColor={"#2E5EE2"}
									uncheckedIcon={false}
									checkedIcon={false}
									activeBoxShadow={"0 0 0px 0px #909AFF"}
									height={24}
									width={48}
								/>
							}
						/>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default Security;
