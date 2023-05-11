import React, { useState } from "react";
import logo from "../../assets/images/logo2.png";
import Notification from "./Notification";
import styles from "./SmallHeader.module.css";

const SmallHeader = () => {
	const [showNotification, setShowNotification] = useState(false);
	return (
		<div className={styles.SmallHeader}>
			{showNotification && <Notification />}
			<div className={styles["SmallHeader-container"]}>
				<button type="button" className={styles.btn} onClick={() => setShowNotification(!showNotification)}>
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.83333 20.9997H22.1667V12.8692C22.1667 8.33901 18.5103 4.66634 14 4.66634C9.48967 4.66634 5.83333 8.33901 5.83333 12.8692V20.9997ZM14 2.33301C19.7983 2.33301 24.5 7.04984 24.5 12.8692V23.333H3.5V12.8692C3.5 7.04984 8.20167 2.33301 14 2.33301ZM11.0833 24.4997H16.9167C16.9167 25.2732 16.6094 26.0151 16.0624 26.5621C15.5154 27.1091 14.7735 27.4163 14 27.4163C13.2265 27.4163 12.4846 27.1091 11.9376 26.5621C11.3906 26.0151 11.0833 25.2732 11.0833 24.4997Z"
							fill="black"
						/>
					</svg>
				</button>
				<button type="button" className={styles.btn}>
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.834 2.33301C18.63 2.33301 23.334 7.03701 23.334 12.833C23.334 18.629 18.63 23.333 12.834 23.333C7.03798 23.333 2.33398 18.629 2.33398 12.833C2.33398 7.03701 7.03798 2.33301 12.834 2.33301ZM12.834 20.9997C17.3455 20.9997 21.0007 17.3445 21.0007 12.833C21.0007 8.32034 17.3455 4.66634 12.834 4.66634C8.32132 4.66634 4.66732 8.32034 4.66732 12.833C4.66732 17.3445 8.32132 20.9997 12.834 20.9997ZM22.7332 21.0825L26.0337 24.3818L24.3828 26.0327L21.0835 22.7322L22.7332 21.0825Z"
							fill="black"
						/>
					</svg>
				</button>
				<button type="button" className={styles.logo}>
					<img src={logo} alt="logo" />
				</button>
			</div>
		</div>
	);
};

export default SmallHeader;
