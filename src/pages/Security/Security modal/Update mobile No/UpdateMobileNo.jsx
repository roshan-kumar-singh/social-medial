import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "../Update Name/UpdateName.module.css";
import Verification from "../Verification/Verification";

const UpdateMobileNo = (props) => {
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
					<h2>Update Mobile No</h2>
					<p>Please enter your new mobile number which you want to update and use</p>
					<label htmlFor="mobile-no">New Mobile Number</label>
					<input type="mobile-no" placeholder="+91 000 000 0000" />
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

export default UpdateMobileNo;
