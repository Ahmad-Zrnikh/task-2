import "./Featured.css"
import Part from "./Part"
export default function Featured() {
  return (
    <div className="featured" >

        <div className="container3">

        <div className="image">
            <img src="./images/images/featured.jpg" alt="" />
            <div className="logo"><img src="./images/images/featured-icon.png" alt="" /></div>
        </div>

        <div className="text3">

  <div className="title-featured">          
<div className="title3">FEATURED</div>
<h1>Best</h1>
<h1>Appartment &</h1>
<h1> Sea View</h1>
</div>


<div className="content">
    <p className="special">Best useful links ?</p>
    <hr />
    <p className="text-content">Get <span className="special1">the best villa</span> website template in HTML CSS and
    Bootstrap for your buisness. TemplateMo provides you the <span className="special2">best free CSS templates </span>
     in the world. Please tell your friends about it.
    </p>
    <p className="special3">How does this work ?</p>
    <hr />
    <div className="special3">Why is Vila Agency the best ?</div>
</div>
        </div>
<div className="section3-featured">
    <Part src="/images/images/info-icon-01.png" name="250 m2" des="Total Flat Space" nameImage=""/>
    <hr />
    <Part src="/images/images/info-icon-02.png" name="Contract" des="Contract Ready" nameImage=""/>
    <hr />
    <Part src="/images/images/info-icon-03.png" name="Payment" des="Payment" nameImage="Process"/>
    <hr />
    <Part src="/images/images/info-icon-04.png" name="Safety" des="24/7 Under" nameImage="Control"/>
</div>


        </div>
    </div>
  )
}
