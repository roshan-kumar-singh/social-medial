import classes from './SecurityItem.module.css'

const SecurityItem = (props) => (
    <div className={`${classes['info-container']} ${props.className}`}>
        <div className={classes.subject}>
            <p className={classes.heading}>{props.heading}</p>
            <p className={classes.content}>{props.content}</p>
        </div>
        <div onClick={props.onClick} style={{cursor:"pointer"}}>{props.action}</div>
    </div>
)

export default SecurityItem;