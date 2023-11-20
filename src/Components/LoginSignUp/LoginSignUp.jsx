import React, { useState } from 'react'
import './LoginSignUp.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <div className='icon'><FaUser /></div>
                    <input type="text" placeholder='Name' name="" id="" />
                </div>}

                <div className="input">
                    <div className="icon"><MdEmail /></div>
                    <input type="email" placeholder='Email ID' name="" id="" />
                </div>
                <div className="input">
                    <div className="icon"><RiLockPasswordFill /></div>
                    <input type="password" placeholder="Password" name="" id="" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignUp