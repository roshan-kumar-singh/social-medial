import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./TwoWayVerification.module.css";

const TwoWayVerification = (props) => {
	const [otp, setOtp] = useState(new Array(6).fill(""));
	const [active, setActive] = useState(0);
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, [active]);

	const handelOtp = ({ target }, index) => {
		const val = target.value;
		const newOtp = [...otp];
		newOtp[index] = val.substring(val.length - 1);
		setOtp(newOtp);
		setActive(index + 1);
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={classes.overlay}>
				<div className={classes.container}>
					<h2>Two Way Verification</h2>
					<p>
						Enabling Two Way Verification after every log in we will send a verification code to verify and secure
						your account{" "}
					</p>
				</div>
				<form className={classes.form}>
					<div className={classes.text}>
						<p className={classes.heading}>Verification</p>
						<p className={classes["sub-text"]}>
							Please verify your updated email id by enter OTP sent to your new email id
						</p>
					</div>
					<label htmlFor="otp">OTP</label>
					<div className={classes.input}>
						{otp.map((_, index) => (
							<input
								type="text"
								ref={active === index ? inputRef :null}
								value={otp[index]}
								onChange={(e) => handelOtp(e, index)}
								className={classes["input-box"]}
							/>
						))}
					</div>
					<div className={classes.actions}>
						<Button type="submit" className={classes.btn}>
							Submit
						</Button>
						<p className={classes.text2}>
							Resend OTP:<span>3s</span>
						</p>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default TwoWayVerification;
