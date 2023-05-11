import classes from './Items.module.css'

const Items = (props) => (
	<div className={classes["info-container"]}>
		<div className={classes.subject}>
			<p className={classes.heading}>{props.heading}</p>
			<p className={classes.content}>{props.content}</p>
		</div>
		<button className={classes.action} style={{ cursor: "pointer" }} onClick={props.onClick}>
			Update
		</button>
	</div>
);

export default Items;