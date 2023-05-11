import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./UpdateName.module.css";

const UpdateName = (props) => {
	return (
		<>
			<Modal onClose={props.onClose}>
				<div className={classes.overlay}>
					<div className={classes.form}>
						<h2>Update Name</h2>
						<p>Please enter your new name which you want to update and use</p>
						<label htmlFor="name">New Name</label>
						<input type="name" placeholder="Enter your new name" />
						<div className={classes.actions}>
							<Button className={classes.btn}>Update</Button>
							<Button className={classes.link} onClick={props.onClose}>
								Back
							</Button>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default UpdateName;
