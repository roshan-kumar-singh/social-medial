import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInLogo from "../../../../assets/svg/sign-in-logo.svg";
import SignUpLogo from "../../../../assets/svg/sign-up-logo.svg";
import classes from "./Floating.module.css";

const Floating = () => {
	const navigate = useNavigate();
	const [In, setIn] = useState(false);

	return (
		<div className={classes.CardDiv}>
			<div
				className={`${classes["sign-up"]} ${In && classes.active}`}
				onClick={() => navigate("/signup")}>
				<div className={classes.image}>
					<img src={SignUpLogo} alt="" draggable="false" />
				</div>
				<div className={classes["text-area"]}>
					<p className={classes["signup-heading"]}>Sign Up</p>
					<p className={classes.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.
					</p>
				</div>
			</div>

			<div
				className={classes["sign-in"]}
				onClick={() => navigate("/signin")}
				onMouseEnter={() => setIn(true)}
				onMouseLeave={() => setIn(false)}>
				<div className={classes.image2}>
					<img src={SignInLogo} alt="" draggable="false" />
				</div>
				<div className={classes["text-area"]}>
					<p className={classes["signin-heading"]}>Sign In</p>
					<p className={classes.text2}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Floating;
