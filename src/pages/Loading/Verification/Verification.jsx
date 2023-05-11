import { useEffect, useRef, useState } from "react";
import ChangeLogo from "../../../assets/svg/Change password.svg";
import Button from "../../../components/Button/Button";
import LoadingBg from "../Loading Bg/LoadingBg";
import classes from "./Verification.module.css";

const Verification = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
	const [activeOtp, setActiveOtp] = useState(0);
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, [activeOtp]);

	const handelOnChange = (e, index) => {
		const value = e.target.value;
		const newOtp = [...otp];
		newOtp[index] = value.substring(value.length - 1);
		setActiveOtp(index + 1);
		setOtp(newOtp);
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className={classes["main-container"]}>
			<LoadingBg />
			<div className={classes["sub-container"]}>
				<div className={classes.header}>
					<div className={classes["text-container"]}>
						<p className={classes.heading}>Verification Code</p>
						<p className={classes.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.
						</p>
					</div>
					<div className={classes.image}>
						<img src={ChangeLogo} alt="" />
					</div>
				</div>
				<form className={classes.form} onSubmit={submitHandler}>
					<div className={classes.input}>
						{otp.map((_, index) => (
							<input
								ref={index === activeOtp ? inputRef : null}
								key={index}
								type="number"
								className={classes["input-box"]}
								value={otp[index]}
								onChange={(e) => handelOnChange(e, index)}
							/>
						))}
					</div>
					<div className={classes.actions}>
						<Button type="submit" className={classes.btn}>
							Submit
						</Button>
					</div>
					<div className={classes.footer}>
						<p className={classes.link}>Back to Sign In</p>
						<section className={classes.time}>
							<p className={classes.text2}>Resend Code In:</p>
							<p className={classes.timer}>26s</p>
						</section>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Verification;
