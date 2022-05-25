import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'



export default function DepartmentPagePage() {
    return (
     
    
       
        <div className="app">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Student Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Department List</a>
                <a className="nav-item nav-link" href="#">Faculty List</a>
                <a className="nav-item nav-link" href="#">Notifications</a>
              </div>
            </div>
          </nav>
  
          
        <br/>
        <br/>
        <br/>
  
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src="./department.jpg" className="card-img-top" alt="We are working on it" />
              <div className="card-body">
                <h5 className="card-title">Department</h5>
                <p className="card-text">The department screen where you can select the department list which you would like to schedule the appoint with.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="{faculty}" className="card-img-top" alt="We are working on it" />
              <div className="card-body">
                <h5 className="card-title">Faculty</h5>
                <p className="card-text">The faculty screen where you can select the faculty list which you would like to schedule the appoint with.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="{notification}" className="card-img-top" alt="We are working on it" />
              <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                <p className="card-text">In the notification screen we can view the list of notifications/confirmation/disapproved list.</p>
              </div>
            </div>
          </div>
  
        </div>
  
         
        </div>
  
      </div>)
};
const HeaderStyle = {
    width: "100%",
    height: "100vh",
   // backgroundimage: url("/image.jpg"),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}


