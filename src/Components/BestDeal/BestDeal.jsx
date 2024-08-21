import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Part from "../Featured/Part"
import "./BestDeal.css"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
export default function BestDeal() {
  return (
    <div className="bestDeal" id="Bestdeal">
        
<div className="firstRow">
    <div className="textDeal">
    <div className="specialText">BEST DEAL</div>
    <h1>Find Your Best</h1>
    <h1>Deal Right Now!</h1>
    </div>
    <div className="buttons">
        <button className="active4">Appartment</button>
        <button>Villa House</button>
        <button>Penthhouse</button>
    </div>
</div>

<div className="secondRow">
<div className="section3-featured new">
    <div><h1>185m2</h1>
    <p>Total Flat Space</p>
    </div>
    <hr />
    <div><h1>26th</h1>
    <p>Floor number</p>
    </div>   
     <hr />
     <div><h1>4</h1>
    <p>Number of rooms</p>
    </div>
        <hr />
        <div><h1>Yes</h1>
    <p>Parking Available</p>
    </div>
        <hr />
        <div><h1>Bank</h1>
    <p>Payment Process</p>
    </div>
    </div>
    <div className="imageDeal">
        <img src="/images/images/deal-01.jpg" alt="" />
    </div>
    <div className="text2Deal">
        <h4>Extra Info About Property</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.do elusmod tempor
             pack incididunt labore et dolore magna aliqua
            quised ipsum suspendisse
             </p>
             <p>
                When you need free CSS templates,you can simply type TemplateMo
                 in any search engine website .
                In addition , you can type TemplateMo portfolio, TemplateMo One page Layouts,etc. 
             </p>
             <a href="#" className="schedule deal"><div className="icon-scedule"><FontAwesomeIcon icon={faCalendar} /></div>Schedule a visit</a>

    </div>
    
</div>


    </div>
  )
}
