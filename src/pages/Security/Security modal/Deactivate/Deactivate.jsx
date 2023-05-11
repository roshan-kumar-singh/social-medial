import { useState } from "react";
import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./Deactivate.module.css";

const Deactivate = (props) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isSelected2, setIsSelected2] = useState(false);
	const [isSelected3, setIsSelected3] = useState(false);

	const selectHandler = () => {
		setIsSelected(true);
		setIsSelected2(false);
		setIsSelected3(false);
	};
	const selectHandler2 = () => {
		setIsSelected2(true);
		setIsSelected(false);
		setIsSelected3(false);
	};
	const selectHandler3 = () => {
		setIsSelected3(true);
		setIsSelected(false);
		setIsSelected2(false);
	};

	return (
		<Modal onClose={props.onClose}>
			<div className={classes.overlay}>
				<form className={classes.form}>
					<div className={classes.text}>
						<h2>Deactivate Account</h2>
						<p>I like to deactivate account </p>
					</div>
					<div className={classes.duration}>
						<div
							value={isSelected}
							onClick={selectHandler}
							className={!isSelected ? classes.input : classes["input-active"]}>
							3 Months
						</div>
						<div
							value={isSelected2}
							onClick={selectHandler2}
							className={!isSelected2 ? classes.input : classes["input-active"]}>
							6 Months
						</div>
						<div
							value={isSelected3}
							onClick={selectHandler3}
							className={!isSelected3 ? classes.input : classes["input-active"]}>
							Permanent
						</div>
					</div>
					<div className={classes.info}>
						<label htmlFor="city">Reason to deactivate</label>
						<input type="option" placeholder="Select your reason" />
					</div>
					<div className={classes.info}>
						<label htmlFor="state">
							Message<span> ( Optional )</span>
						</label>
						<input type="option" placeholder="Select your message" />
					</div>
					<div className={classes.actions}>
						<Button onClick={props.onClose} className={classes.btn}>
							Deactivate account
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default Deactivate;
