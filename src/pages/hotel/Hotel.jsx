import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { useState } from "react"
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark, faLocationDot, } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: "../images/Hotels/Queens kandy/1.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/2.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/3.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/4.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/5.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/6.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/7.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/8.jpg"
    },
    {
      src: "../images/Hotels/Queens kandy/9.jpg"
    },
  ];

const handleOpen = (i)=>{
  setSlideNumber(i);
  setOpen(true)
};

const handleMove = (direction) =>{
  let newSlideNumber;

  if(direction==="l"){
    newSlideNumber = slideNumber === 0 ? 8 : slideNumber-1
  }else{
    newSlideNumber = slideNumber === 8 ? 0 : slideNumber+1
  }

  setSlideNumber(newSlideNumber)
};

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open &&<div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
        <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow" onClick={()=>handleMove("l")} />
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" onClick={()=>handleMove("r")} />
          </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Queens Hotel</h1>
          <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
            <span>DS Senanayake Veediya, Kandy 20000</span>
            </div>
            <span className="hotelDistance">
            350 m from centre
            </span>
            <span className="hotelPriceHighlight">
             Book Start Over LKR 13,149 at this property and get a free airport taxi 
            </span>
             <div className="hotelImages">
                {
                  photos.map((photo,i) => (
                    <div className="hotelImageWrapper">
                      <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                    </div>
                  ))
                }
             </div>
             <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotlTitle">Queens hotel Kandy</h1>
                  <p className="hoteldesc">
                  Queen's Hotel is housed in a historical building located 50 metres from Kandy Lake. It offers colonial-
                  style accommodation with an outdoor pool, 3 dining options and free parking on site.Spacious rooms have
                  large windows and hardwood furnishings. Each guestroom is equipped with a minibar, tea/coffee making 
                  facilities and a television set. Hot shower facilities are provided in the en suite bathroom.
                  The tour desk can assist with making travel and sightseeing arrangements. Car rental and airport shuttle 
                  services are available upon request.
                  Queen of Hearts Restaurant serves a wide variety of traditional local dishes, and is available for all-day
                  dining. Other dining options include light snacks and refreshing beverages at the Pub Royal and Lounge Bar.
                  Hotel Queen's is located 150 metres from the Temple of Tooth Relic and 950 metres from Udawattekele 
                  National Forest Reserve.
                  Couples particularly like the location — they rated it 9.4 for a two-person trip.
                  </p>
                  </div>
                    <div className="hotelDetailsPrice">
                      <h1>Perfect for a 9-night stay!</h1>
                      <span>
                        Located in the real heart of kandy, this property has an excellent location score of 9.8!
                      </span>
                      <h2>
                        <b>LKR 13,149</b>(per night)
                      </h2>
                      <button>Reserve or Book Now!</button>
                    </div> 
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}; 

export default Hotel
