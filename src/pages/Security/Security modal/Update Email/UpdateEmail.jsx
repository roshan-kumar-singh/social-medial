import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "../Update Name/UpdateName.module.css";
import Verification from "../Verification/Verification";

const UpdateEmail = (props) => {
	const [verification, setVerification] = useState(false);

	const verificationHandler = () => {
		setVerification(true);
	};
	const hideVerificationHandler = () => {
		setVerification(false);
	};
	return (
		<Modal onClose={props.onClose}>
			{verification && <Verification onClose={hideVerificationHandler} />}
			<div className={classes.overlay}>
				<form className={classes.form}>
					<h2>Update Email</h2>
					<p>Please enter your new email id which you want to update and use</p>
					<label htmlFor="email">New Email</label>
					<input type="email" placeholder="Enter your email id" />
					<div className={classes.actions}>
						<Button onClick={verificationHandler} className={classes.btn}>
							Update
						</Button>
						<Button className={classes.link} onClick={props.onClose}>
							Back
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default UpdateEmail;
