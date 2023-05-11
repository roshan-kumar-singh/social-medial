import classes from './LoadingScreen.module.css'
import LoadingBg from '../Loading Bg/LoadingBg';
import Floating from './SignUp-SignIn/Floating';


const LoadingScreen = () => {
    return <div className={classes.container}>
        <LoadingBg className={classes.bg} />
        <div className={classes['hover-animation']}>
            <Floating />
        </div>
    </div>
}

export default LoadingScreen;