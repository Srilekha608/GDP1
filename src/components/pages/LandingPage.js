import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'


export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
           <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand text-success" href="#">
             
            </a>
            <button class="navbar-toggler" type="button" 
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse"></div>
  
            <div class="collapse navbar-collapse" 
                 id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" 
                           href="#">
                          Home 
                          <span class="sr-only">
                            (current)
                          </span>
                      </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" 
                           href="#">
                          About
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" 
                           href="/home">
                         Login 
                          <span class="sr-only">
                            (current)
                          </span>
                      </a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" 
                           href="/register">
                          SignUp
                          <span class="sr-only">
                            (current)
                          </span>
                      </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">
                          Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
            <h1 className="main-title text-center">Faculty Appointment Scheduler</h1>
            <p className="main-para text-center">Book your Appointments</p>
            <div className="buttons text-center">
                <Link to="/home">
                    <button className="primary-button">Get Started</button>
                </Link>
                </div>

        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
   // backgroundimage: url("/image.jpg"),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}