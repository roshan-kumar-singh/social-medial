import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../../../components/BG/Bg";
import Button from "../../../components/Button/Button";
import classes from "./ProfessionalPersona.module.css";

const ProfessionalPersona = () => {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/get-started/congratulation");
	};

	const [name, setName] = useState("");
	const [profession, setProfession] = useState("");

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setName("");
		setProfession("");
	};

	return (
		<div className={classes["main-container"]}>
			<Bg />
			<div className={classes.container}>
				<form onSubmit={formSubmitHandler}>
					<h1 className={classes.heading}>
						Set up your <br /> Professional persona
					</h1>
					<p className={classes.text1}>Customize your Persona</p>
					<section className={classes["logo-section"]}>
						<div className={classes["logo-container"]}>
							Upload <br /> Logo
						</div>
					</section>
					<div className={classes.input}>
						<div className={classes["input-field"]}>
							<label className={classes.text2} htmlFor="display-namel">
								Professional Name
							</label>
							<input
								type="text"
								className={classes["input-box"]}
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Naku@876"
							/>
						</div>
						<div className={classes["input-field"]}>
							<label className={classes.text2} htmlFor="display-namel">
								Profession Type
							</label>
							<input
								type="text"
								className={classes["input-box"]}
								value={profession}
								placeholder="Select your profession"
								onChange={(e) => setProfession(e.target.value)}
							/>
						</div>
					</div>
					<div className={classes.actions}>
						<Button type="submit">Choose Template</Button>
						<Button type="submit" onClick={navigateHandler}>
							Skip For Now
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfessionalPersona;
