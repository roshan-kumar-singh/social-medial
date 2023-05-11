import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./Verification.module.css";

const Verification = (props) => {
	const [otp, setOtp] = useState(new Array(6).fill(""));
	const [activeOtp, setActiveOtp] = useState(0);
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, [activeOtp]);

	const handelOtp = ({ target }, index) => {
		const val = target.value;
		const newOtp = [...otp];
		newOtp[index] = val.substring(val.length - 1);
		setOtp(newOtp);
		setActiveOtp(index + 1);
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={classes.overlay}>
				<form className={classes.form}>
					<div className={classes.text}>
						<h2>Verification</h2>
						<p>Please enter your new mobile number which you want to update and use </p>
					</div>
					<label htmlFor="otp">OTP</label>
					<div className={classes.input}>
						{otp.map((_, index) => (
							<input
								key={index}
								type="number"
								className={classes["input-box"]}
								ref={activeOtp === index ? inputRef : null}
								value={otp[index]}
								onChange={(e) => handelOtp(e, index)}
							/>
						))}
					</div>
					<div className={classes.actions}>
						<Button type="submit" className={classes.btn}>
							Submit
						</Button>
						<p className={classes.text2}>
							Resend OTP: <span>3s</span>
						</p>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default Verification;
