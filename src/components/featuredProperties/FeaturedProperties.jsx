import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="../images/Fevoplaces/queenshotel.jpg" alt="" className="fpImg" />
            <span className="fpName">QUEENS HOTEL</span>
            <span className="fpCity">Kandy</span>
            <span className="fpPrice">Starting from 40$</span>
            <div className="fpRaiting">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="../images/Fevoplaces/CinnamonBentotaBeach.jpg" alt="" className="fpImg" />
            <span className="fpName">CINNAMON BEACH HOTEL</span>
            <span className="fpCity">Benthota</span>
            <span className="fpPrice">Starting from 50$</span>
            <div className="fpRaiting">
                <button>8.8</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src="../images/Fevoplaces/galadari.jpg" alt="" className="fpImg" />
            <span className="fpName">GALADARI Hotel</span>
            <span className="fpCity">Colombo</span>
            <span className="fpPrice">Starting from 55$</span>
            <div className="fpRaiting">
                <button>8.7</button>
                <span>Excellent</span>
            </div>
        </div>
        

        <div className="fpItem">
            <img src="../images/Fevoplaces/mount-lavinia-hotel.jpg" alt="" className="fpImg" />
            <span className="fpName">MOUNT LAVINIA HOTEL</span>
            <span className="fpCity">Mount Lavinia</span>
            <span className="fpPrice">Starting from 60$</span>
            <div className="fpRaiting">
                <button>8.6</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
    
    
    
  )
}

export default FeaturedProperties
