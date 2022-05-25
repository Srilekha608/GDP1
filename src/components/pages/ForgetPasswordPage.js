import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter the valid email address</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email"  pattern = "^(S)\d{6}(@nwmissouri.edu)$" title="Please enter the S******@nwmissouri.edu" required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Reset Link</button>
                </p>
            </form>
            <footer>
               
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
