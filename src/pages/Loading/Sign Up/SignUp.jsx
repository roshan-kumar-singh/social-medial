import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import facebook from "../../../assets/Images/Facebook.png";
import google from "../../../assets/Images/Google.png";
import signUpLogo from "../../../assets/svg/sign-up-logo.svg";
import Button from "../../../components/Button/Button";
import LoadingBg from "../Loading Bg/LoadingBg";
import classes from "./SignUp.module.css";

const SignUp = () => {
	const navigate = useNavigate();

    const navigate2 = useNavigate()
    const getStartedHandler = () => {
        navigate2('/get-started')
    }
    

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword,setcpassword] = useState("");

    // const collectDatA = () =>{
    //     console.log(name, email, password)
    // }


    // const passwordHandler = (e) => {
    //     setPassword(e.target.value)
    // }

		// you can use this for many types of popup 👇
		toast("🦄 Wow so easy!");
		toast.info("🦄 Wow so easy!");
		toast.success("🦄 Wow so easy!");
		toast.warn("🦄 Wow so easy!");
		toast.error("🦄 Wow so easy!");
	};

    const collectData=async()=> {
        console.warn(username,email,dob,password,cpassword);
        let result = await fetch('http://localhost:3000/api/auth/register',{
            method: 'POST',
            body:JSON.stringify({username,email,dob,password,cpassword}),
            headers: {'Content-Type': 'application/json'},
        });
        result = await result.json();
        console.warn(result);
        if(result){
            navigate('/get-started');
        }
        
    

    return (
        <div className={classes['main-container']}>
            <LoadingBg />
            <Card className={classes['sub-container']}>
                <div className={classes.header}>
                    <div className={classes['text-container']}>
                        <p className={classes.heading}>Sign Up</p>
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={signUpLogo} alt="" />
                    </div>
                </div>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes['input-container']}>
                        <div className={classes.input}>
                            <label htmlFor='name' className={classes.label}>Name</label>
                            <input type='text' className={classes['input-box']} value={username} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className={classes['contact-info']}>
                            <div className={classes.input}>
                                <label htmlFor='email' className={classes.label}>E-mail or Phone no</label>
                                <input type='text' className={classes['input-box']} value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className={classes.input}>
                                <label htmlFor='dob' className={classes.label}>Date of birth</label>
                                <input type='text' className={classes['input-box']} value={dob} onChange={(e)=>setDob(e.target.value)} />
                            </div>
                        </div>
                        <div className={classes.input}>
                            <label htmlFor='password' className={classes.label}>New password</label>
                            <input type='password' className={classes['input-box']} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className={classes.input}>
                            <label htmlFor='password' className={classes.label}>Re-type password</label>
                            <input type='password' className={classes['input-box']} value={cpassword} onChange={(e)=>setcpassword(e.target.value)}/>
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
                        <Button type='submit' className={classes.btn} onClick={collectData}>Submit</Button>
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


export default SignUp;
