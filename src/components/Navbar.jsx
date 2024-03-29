
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import profile from "../images/profile-img.jpeg"
// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />


import  "./navbar.css"
// import wholeData from '../GetData.js'




export default function Navbar() {
 
   const checkBtn = () => {
    let btn = document.querySelector("#checkbtn");
    const heroSec = document.querySelector("#hero-sec")
    const btn2 = document.querySelector("#btn2")
    // crossBtn.setAttribute("id", "cross-btn")
    btn.addEventListener("click", (e) => {
        let navLinks = document.querySelector(".nav-links")
       
        if(navLinks.style.display == "none" ) {
            heroSec.style.marginTop = "300px" 
            navLinks.style.display = "block";
            // btn.style.display = "none" 
            // btn2.style.display = "block"
         
             

        } else {
           
            navLinks.style.display = "none"
            heroSec.style.marginTop = "25px" 
           
          
           
            // btn.style.display = "block" 
        }
    })
   }
 
       
    return (
       <div className='navbar'>
       
        <p id="name">John</p>

        <div className="nav-links">
            <a href="#hero-sec">About</a>
            <a href="#about-sec">Services</a>
          
            <a href="#projects-main">Project</a>
            <a href="#testimonials">Review</a>
        </div>
        <a href="#Nav-Contact" id="nav-contact">Contact</a>
        {/* <input type="checkbox" id="check" name="" value=""></input> */}
        <button  id="checkbtn" onClick={checkBtn}><i class="fa-solid fa-bars"></i></button>
        <button id="btn2"><i class="fa-solid fa-xmark"></i></button>
       </div>
        
    )
    
}
