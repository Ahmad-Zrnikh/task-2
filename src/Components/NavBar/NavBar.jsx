import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function NavBar() {
   
    
  return (
    <div className="NavBar">
<div className="container2">
    <a href="#" className="title"><h2>VILLA</h2></a>
    <nav>
        <span className="burger-icon"   > 
            <span></span>
            <span></span>
            <span></span>
           <input type="checkbox" className="check"/>
            <ul >
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#property">Properties</a></li>
            <li><a href="#Cards">Property Details</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
            <li><a href="#Bestdeal" className="schedule"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a></li>
            
        </ul>
        </span>
        <ul  >
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#property">Properties</a></li>
            <li><a href="#Cards">Property Details</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
            <li><a href="#Bestdeal" className="schedule"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a></li>
            
        </ul>
        
       
    </nav>
</div>

    </div>
  )
}
