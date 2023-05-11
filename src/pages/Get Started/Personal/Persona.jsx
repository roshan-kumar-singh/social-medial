import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../../../components/BG/Bg";
import classes from "./Persona.module.css";

const Persona = () => {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/get-started/congratulation");
	};

	const [displayName, setDisPlayName] = useState("");
	const displayNameHandler = (e) => {
		setDisPlayName(e.target.value);
		console.log(displayName);
	};
	const formSubmitHandler = (e) => {
		e.preventDefault();

		setDisPlayName("");
	};

	return (
		<div className={classes["main-container"]}>
			<Bg />
			<div className={classes.container}>
				<form onSubmit={formSubmitHandler}>
					<h1 className={classes.heading}>Set up your persona</h1>
					<p className={classes.text1}>Customize your Persona</p>
					<div className={classes.input}>
						<label className={classes.text2} htmlFor="display-namel">
							Display Name
						</label>
						<input type="text" className={classes["input-box"]} value={displayName} onChange={displayNameHandler} />
					</div>
					<div className={classes.actions}>
						<button type="submit">Choose Template</button>
						<button type="submit" onClick={navigateHandler}>
							Skip For Now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Persona;
