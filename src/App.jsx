// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Featured from './Components/Featured/Featured';
import NavBar from './Components/NavBar/NavBar';
import Slider from './Components/Slider/Slider';
import VideoView from './Components/VideoView/VideoView';
import Header from './Components/header/Header';
import Rectangular from './Components/VideoView/Rectangular';
import BestDeal from './Components/BestDeal/BestDeal';
import Properties from './Components/Properties/Properties';
import Cards from './Components/Cards/Cards';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';


function App() {
  return (
   <div className='app'>
    <Header/>
    <NavBar/>
    <Slider/>
    <Featured/>
    <VideoView/>
    <div  className="rectangulars">
    <Rectangular number ="34" name1= "Buildings" name2 = "Finished Now"/>
    <Rectangular number ="12" name1= "Years" name2 = "Experience"/>
    <Rectangular number ="24" name1= "Awwards" name2 = "Won 2023"/>
     </div>
     <BestDeal/>
     <Properties/>
     <Cards/>
     <ContactUs/>
     <Footer/>
   </div>
  )
}

export default App;
