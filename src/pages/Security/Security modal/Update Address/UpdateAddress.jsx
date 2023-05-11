import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./UpdateAddress.module.css";

const UpdateAddress = (props) => (
	<Modal onClose={props.onClose}>
		<div className={classes.overlay}>
			<form className={classes.form}>
				<div className={classes.text}>
					<h2>Update Address</h2>
					<p>Please fill the form to update your address</p>
				</div>
				<div className={classes["address-section"]}>
					<div className={classes.address}>
						<label htmlFor="address">Address line 1</label>
						<input type="address" placeholder="Enter Address" />
					</div>
					<div className={classes.address}>
						<label htmlFor="address">Address line 2</label>
						<input type="address" placeholder="Enter Address" />
					</div>
				</div>
				<div className={classes["other-info"]}>
					<div className={classes.info}>
						<label htmlFor="city">City</label>
						<input type="text" placeholder="City" />
					</div>
					<div className={classes.info}>
						<label htmlFor="state">State</label>
						<input type="text" placeholder="State" />
					</div>
					<div className={classes.info}>
						<label htmlFor="district">District</label>
						<input type="text" placeholder="District" />
					</div>
					<div className={classes.info}>
						<label htmlFor="pincode">Pin Code</label>
						<input type="pincode" placeholder="Pin Code" />
					</div>
				</div>
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

export default UpdateAddress;
