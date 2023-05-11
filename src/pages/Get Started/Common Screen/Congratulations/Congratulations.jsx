import { useNavigate } from "react-router-dom";
import Bg from "../../../../components/BG/Bg";
import Button from "../../../../components/Button/Button";
import classes from "./Congratulations.module.css";

const Congratulations = () => {
	const navigate = useNavigate();
	const handelSubmit = () => {
		navigate("/Home");
	};
	return (
		<div className={classes["main-container"]}>
			<Bg />
			<div className={classes.container}>
				<h1 className={classes.heading}>Congratulations</h1>
				<p className={classes.text1}>Customize your Persona</p>
				<div className={classes["text-container"]}>
					<div className={classes.row1}>
						<p>View Insights</p>
						<p>Analyses your post</p>
						<p>Redirect to store</p>
					</div>
					<div className={classes.row2}>
						<p>Personalized Professional persona</p>
						<p>View Audience Base</p>
					</div>
					<div className={classes.row3}>
						<p>Promote Posts</p>
						<p>Upload product images</p>
					</div>
				</div>
				<Button onClick={handelSubmit} className={classes.btn}>
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default Congratulations;
