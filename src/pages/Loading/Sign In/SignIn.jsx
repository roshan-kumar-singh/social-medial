import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facebook from "../../../assets/Images/Facebook.png";
import google from "../../../assets/Images/Google.png";
import signInLogo from "../../../assets/svg/sign-in-logo.svg";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import LoadingBg from "../Loading Bg/LoadingBg";
import classes from "./SignIn.module.css";
import { toast } from "react-toastify";

const SignIn = () => {
    const navigate = useNavigate()
    const forgetPasswordHandler = () => {
        navigate('/forget-password')
    }

    const navigate2 = useNavigate()
    const getStartedHandler = () => {
        navigate2('/get-started')
    }

    const [password, setPassword] = useState('')

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setPassword('')
    }

    return (
        <div className={classes['main-container']}>
            <LoadingBg />
            <Card className={classes['sub-container']}>
                <div className={classes.header}>
                    <div className={classes['text-container']}>
                        <p className={classes.heading}>Sign In</p>
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={signInLogo} alt="" />
                    </div>
                </div>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes['input-container']}>
                        <div className={classes.input}>
                            <label htmlFor='email' className={classes.label}>E-mail or Phone no</label>
                            <input type='text' className={classes['input-box']} value={password} onChange={passwordHandler} />
                        </div>
                        <div className={classes.input}>
                            <label htmlFor='password' className={classes.label}>Password</label>
                            <input type='password' className={classes['input-box']} />
                        </div>
                        <div className={classes['forget-remember']}>
                            <section className={classes.remember}>
                                <input type='radio' className={classes['radio-button']} />
                                <label className={classes['remember-me']}>Remember me</label>
                            </section>
                            <p className={classes.link} onClick={forgetPasswordHandler}>Forget Password</p>
                        </div>
                    </div>
                    <div className={classes.actions}>
                        <Button type='submit' className={classes.btn} onClick={getStartedHandler}>Submit</Button>
                    </div>
                    <div className={classes.design}>
                        <div className={classes.line}></div>
                        <p className={classes.continue}>Continue With</p>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.footer}>
                        <button>
                            <img src={google} alt="" />
                        </button>
                        <button>
                            <img src={facebook} alt="" />
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default SignIn;
