import classes from './LoadingBg.module.css'
import bigLogo from "../../../assets/svg/New Logo  - White.svg";
import logo from '../../../assets/svg/Component 2.svg'


const LoadingBg = (props) => {
    return (
        <div className={`${classes['landing-bg']} ${props.className}`}>
            <div className={classes['logo-container']}>
                <img src={bigLogo} alt="" draggable='false' className={classes['big-logo']} />
                <img src={logo} alt="" draggable='false' className={classes['small-logo']} />
            </div>
        </div>
    )
}

export default LoadingBg;