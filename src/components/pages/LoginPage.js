import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import StudentHomePage from './StudentHomePage'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
           <div class="card-title text-center">
                            <h3 class="mt-5">STUDENT LOGIN</h3> <medium class="para">Login to your account </medium>
                        </div>

            <form action="/home">
                <p>
                    <label>Email</label><br/>
                    <input type="text" name="first_name"  pattern = "^(S)\d{6}(@nwmissouri.edu)$" title="Please enter the S******@nwmissouri.edu" required />
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input type="password" name="password"  pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required />
                </p>
                <p>
           
            <Link to="/studenthome">  <button id="sub_btn" type="submit">Login</button></Link>
                </p>
                <div class="row">
                                <div class="col-6 col-sm-6" > <Link to="/forget-password">  
                                    <p class="text-left pt-2 ml-1">Forgot password?</p>
                                </Link></div>
                                <div class="col-6 col-sm-6" > 
                                <Link to="/register">
                                    <p class="text-right pt-2 mr-1"  >SignUp</p>
                               </Link>
                            
                                </div>
                                </div>

            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}