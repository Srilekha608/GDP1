


 
import { Link } from 'react-router-dom'

import React, { useState } from 'react'
import NavBar from './NavBar';



  const USERS = [
    { id: 1, firstname: 'Ratan' ,lastname:'Lal' , email:'lal@nwmissouri.edu'},
    { id: 2, firstname: 'Ajay' ,lastname:'Bandi', email:'bandi@nwmissouri.edu'},
    { id: 3, firstname: 'Prasad' ,lastname:'Chetti',email:'prasad@nwmissouri.edu' },
    { id: 4, firstname: 'Chandra' ,lastname:'Mouli',email:'cmouli@nwmissouri.edu' },
  
    
  ];
  
  function StudentHomePage() {
    // the value of the search field 
    const [name, setName] = useState('');
  
    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = USERS.filter((user) => {
          return (user.firstname.toLowerCase().startsWith(keyword.toLowerCase()));
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(USERS);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
  return (
    

  <div className="text-center">
       
  
 <p className="main-para text-center">Faculty Listing Page</p><br></br>

   <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search" 
      />   
   

      <br></br><br></br>
      <div class="container mt-4">
<div class="list-group">
 {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <ul class="list-group list-group-light">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <div>




                
           <div class="fw-bold mb-1"> {user.firstname} {user.lastname}</div>
                <div class="text-muted">email: {user.email}</div>
                <div>
                <Link to="/calender"><button class="badge rounded-pill badge-black" >Book Slot </button> </Link>
              </div>
           
              </div>
             
            </li>
</ul>




          ))
        ) : (
          <h1>No results found!</h1>
        )}
    <div class="row">  
        <footer>  <Link to="/studenthome"> Back
            </Link></footer>
      </div>
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
export default StudentHomePage


   
