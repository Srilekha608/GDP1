import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        
        <div className="text-center">
            <h1 className="main-title home-page-title">Faculty Appointment Scheduler</h1>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button"id="reg_btn"><span>Student Login</span></button>
                </Link>
                <Link to="/loginf">
                    <button className="primary-button" id="reg_btn"><span>Faculty Login</span></button>
                </Link>
            </div><br/>
           
     <footer>  <Link to="/"> Back
            </Link></footer>
       
        </div>
    )
}
