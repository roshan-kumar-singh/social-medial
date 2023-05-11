import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangeLogo from "../../../assets/svg/Change password.svg";
import Button from "../../../components/Button/Button";
import LoadingBg from "../Loading Bg/LoadingBg";
import classes from "./ChangePassword.module.css";

const ChangePassword = () => {
	const navigate = useNavigate();
	const verificationHandler = () => {
		navigate("/verification-code");
	};

	const [password, setPassword] = useState("");

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setPassword("");
	};

	return (
		<div className={classes["main-container"]}>
			<LoadingBg />
			<div className={classes["sub-container"]}>
				<div className={classes.header}>
					<div className={classes["text-container"]}>
						<p className={classes.heading}>Change Password</p>
						<p className={classes.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.
						</p>
					</div>
					<div className={classes.image}>
						<img src={ChangeLogo} alt="" />
					</div>
				</div>
				<form className={classes.form} onSubmit={submitHandler}>
					<div className={classes["input-container"]}>
						<div className={classes.input}>
							<label htmlFor="password" className={classes.label}>
								New Password
							</label>
							<input type="text" className={classes["input-box"]} value={password} onChange={passwordHandler} />
						</div>
						<div className={classes.input}>
							<label htmlFor="password" className={classes.label}>
								Confirm Password
							</label>
							<input type="password" className={classes["input-box"]} />
						</div>
					</div>
					<div className={classes.actions}>
						<Button type="submit" className={classes.btn} onClick={verificationHandler}>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangePassword;
