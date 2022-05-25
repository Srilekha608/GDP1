import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import LoginPageF from './components/pages/LoginPageF'
import NavBar from './components/pages/NavBar'
import StudentHomePage from './components/pages/StudentHomePage'
import Calender from './components/pages/Calender'
import FacultyList from './components/pages/FacultyList'
import DepartmentPagePage from './components/pages/DepartmentPage'
import StudentConfirmation from './components/pages/StudentConfirmation'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/navbar" component={ NavBar } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/loginf" component={ LoginPageF } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/departmentpage" component={ DepartmentPagePage } />
                    <Route path="/studentconfirmation" component={ StudentConfirmation } />
                    <Route path="/calender" component={ Calender } />
                    <Route path="/facultylist" component={ FacultyList } />
                    <Route path="/studenthome" component={ StudentHomePage } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}