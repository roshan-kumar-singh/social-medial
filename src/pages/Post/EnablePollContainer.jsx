import React, { useState } from "react";
import styles from "./Post.module.css";
import Switch from "react-switch";
const EnablePollContainer = () => {
    const [value, setValue] = useState(false)
	console.log(value);
	
	return (
		<div className={styles.EnablePollContainer}>
			<div className={styles.left}>
				<button>A. Yes</button>
				<button>B. No</button>
			</div>
			<div className={styles.right}>
				<p>Enable Poll</p>
				<Switch
					onChange={(e) => setValue(e)}
					checked={value}
					offColor={"#c4c4c4"}
					onColor={"#909AFF"}
					offHandleColor={"#959595"}
					onHandleColor={"#2E5EE2"}
					uncheckedIcon={false}
					checkedIcon={false}
					activeBoxShadow={"0 0 0px 0px #909AFF"}
					height={30}
					width={64} 
				/> 
			</div>
		</div>
	);
};

export default EnablePollContainer;
