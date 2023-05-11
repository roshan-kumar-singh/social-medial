import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../../../../components/BG/Bg";
import Button from "../../../../components/Button/Button";
import classes from "./GetStarted1.module.css";

const GetStarted1 = () => {
	const [isSelected, setIsSelected] = useState(true);
	const [isSelected2, setIsSelected2] = useState(false);

	const personalHandler = () => {
		setIsSelected(!isSelected);
		setIsSelected2(false);
	};
	const professionalHandler = () => {
		setIsSelected2(!isSelected2);
		setIsSelected(false);
	};
	const submitHAndler = () => {
		if (isSelected) navigate("/get-started/personal");
		else if (isSelected2) {
			navigate("/get-started/professional");
		}
	};
	const navigate = useNavigate();

	return (
		<div className={classes["main-container"]}>
			<Bg />
			<div className={classes.container}>
				<h1 className={classes.heading}>Let's Get Started</h1>
				<p className={classes.text1}>Customize your persona</p>
				<div className={classes.input}>
					<label className={classes.text2} htmlFor="username">
						User Name
					</label>
					<input type="text" placeholder="Naku@876" className={classes["input-box"]} />
				</div>
				<label className={classes.text2} htmlFor="account">
					Select account type
				</label>
				<div className={classes.buttons}>
					<div
						className={!isSelected ? classes.btn : classes["btn-active"]}
						value={isSelected}
						onClick={personalHandler}>
						Personal Account
					</div>
					<div
						className={!isSelected2 ? classes.btn : classes["btn-active"]}
						value={isSelected2}
						onClick={professionalHandler}>
						Professional Account
					</div>
				</div>
				<Button type="submit" className={classes.btn2} onClick={submitHAndler}>
					Continue
				</Button>
			</div>
		</div>
	);
};

export default GetStarted1;
