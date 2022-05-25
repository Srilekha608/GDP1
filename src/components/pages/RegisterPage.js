import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
             <div class="card-title text-center">
                            <h5 class="mt-5">SIGN UP</h5> <small class="para">Create a new account </small>
                        </div>
            <form action="/home">
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label> New Password</label><br/>
                    <input type="password" name="password" pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" requiredc />
                </p>
                <p>
                    <label> Confirm Password</label><br/>
                    <input type="password" name="password" pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Create Account</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
