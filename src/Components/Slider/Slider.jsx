import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Slider.css"
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Slider() {

    const slides = document.querySelectorAll(".slide");
    const Balls = document.querySelectorAll(".balls span");
    var counter = 0 ;

    const updateBalls = () => {
        Balls.forEach(
            (ball) => {
                ball.classList.remove("ballActive");
            }
        )
    }

    const activeBall = () => {
        if(counter == 0){
        document.getElementById("first").classList.add("ballActive");}
        else if(counter == 1){
        document.getElementById("second").classList.add("ballActive");}
        else if(counter == 2){
        document.getElementById("third").classList.add("ballActive");}
    }

    slides.forEach(
        (slide , index) => {
            slide.style.left = `${index * 100}%` ;
        }
    );
    const Image = () => {
        slides.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            }
        )
    };


    const goprev = () => {
        if(counter == 0)
        counter = 2;
        else
        counter--;
        Image();
       updateBalls();
       activeBall();
    }

    const goNext = () => {
        if(counter == 2)
        counter = 0 ;
        else
        counter++;
        Image();
        updateBalls();
        activeBall();
    }

   
    
  return (
    <div className="slider">

    <img src="./images/images/banner-01.jpg"  className="slide" />
    <img src="./images/images/banner-02.jpg"  className="slide" />
    <img src="./images/images/banner-03.jpg"  className="slide" />

<div className="arrows">
    <button onClick={goprev}><FontAwesomeIcon  icon={faCircleChevronLeft} /></button>
     <button onClick={goNext}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
</div>


<div className="textSlide">
    <div>Toronto, <span className="specialT">Canada</span></div>
    <h1>HURRY!</h1>
    <h1>GET THE</h1>
    <h1>BEST VILLA</h1>
    <h1>FOR YOU</h1>
</div>

<div className="balls">
<span className="ballActive" id="first" ></span>
<span id="second"></span>
<span id="third"></span>
</div>
    </div>
  )
}
