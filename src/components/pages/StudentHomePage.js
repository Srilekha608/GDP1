import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default function StudentHomePage() {
    return (
     
    
       
     <div className="text-center">
     
      
        <h5 className="main-title home-page-title">Welcome To Student Home Page!</h5>
   
        

      <div class="card">
        <div class="image">
          <img src="" />
        </div>
        <div class="title">
          <h4>ACS</h4>
        </div>
        <div class="des">
          <p></p>
          <Link to="/facultylist" > <button>View More...</button> </Link>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="" />
        </div>
        <div class="title">
          <h4>IS</h4>
        </div>
        <div class="des">
          <p></p>
          <Link to="/facultylist" > <button>View More...</button> </Link>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="" />
        </div>
        <div class="title">
          <h4>Multi-Media</h4>
        </div>
        <div class="des">
          <p></p>
         <Link to="/facultylist" > <button>View More...</button> </Link>
        </div>
      </div>
      
      

      <div class="buttons text-center">
      <div class="row">
        <footer>
          {" "}
          <Link to="/"> Back</Link>
        </footer>
      </div>
    
      
    <div class="row">  
        <footer>  <Link to="facultylist"> Go To FacultyList
            </Link></footer>
      </div>
      </div>
      </div>
       
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


