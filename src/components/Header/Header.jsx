import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import exit from "../../assets/svg/exit.svg";
import styles from "./Header.module.css";

const Header = () => {
	const [LogoutPopup, setLogoutPopup] = useState(false);
	return (
		<nav className={styles.HeaderContainer}>
			<div className={styles.logoContainer}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			<div className={styles.navContainer}>
				<ul>
					<li>
						<Link to="/Home">Home</Link>
					</li>
					<li>
						<Link to="Persona">Persona</Link>
					</li>
					<li>
						<Link to="Explore">Explore</Link>
					</li>
					<li>
						<Link to="Chat">Chat</Link>
					</li>
					<li>
						<Link to="/Setting">Setting</Link>
					</li>
				</ul>
			</div>
			<div className={styles.logoutContainer}>
				<Link onClick={() => setLogoutPopup(true)}>
					<img src={exit} alt="exit" />
				</Link>
			</div>
			{LogoutPopup && (
				<div className={styles.LogoutPopup}>
					<h1>
						Do You Want To <span>End Live ?</span>
					</h1>
					<div>
						<button type="button" onClick={() => setLogoutPopup(false)}>
							Log Out
						</button>
						<button type="button" onClick={() => setLogoutPopup(false)}>
							Cancel
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;
