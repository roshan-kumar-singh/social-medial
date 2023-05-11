import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "../Update Name/UpdateName.module.css";

const UpdateDob = (props) => (
	<Modal onClose={props.onClose}>
		<div className={classes.overlay}>
			<form className={classes.form}>
				<h2>Update Date of Birth</h2>
				<p>Please enter your date of birth which you want to update and use</p>
				<label htmlFor="date">Date of birth</label>
				<input type="date" placeholder="12 june 56" />
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
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

export default UpdateDob;
