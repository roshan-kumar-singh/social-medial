import classes from './ForgetPassword.module.css';
import LoadingBg from '../Loading Bg/LoadingBg';
import ForgetLogo from '../../../assets/svg/Foget password.svg';
import Card from '../../../components/Card/Card';
import Button from "../../../components/Button/Button";
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const navigate = useNavigate()
    const changePasswordHandler = () => {
        navigate('/change-password')
    }

    return (
        <div className={classes['main-container']}>
            <LoadingBg />
            <div className={classes['sub-container']}>
                <div className={classes.header}>
                    <div className={classes['text-container']}>
                        <p className={classes.heading}>Forget Password</p>
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={ForgetLogo} alt="" />
                    </div>
                </div>
                <form className={classes.form}>
                    <div className={classes.input}>
                        <label htmlFor='email' className={classes.label}>E-mail / Phone no</label>
                        <input type='email' className={classes['input-box']} />
                    </div>
                    <div className={classes.actions}>
                        <Button type='submit' className={classes.btn} onClick={changePasswordHandler}>Submit</Button>
                    </div>
                    <p className={classes.link}>Back to Sign In</p>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;

