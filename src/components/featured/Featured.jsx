import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="futureItem">
            <img src="../images/Places/nuwaraeliya/nuwaraeliya01.jpg" 
            alt="" 
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Nuwaraeliya</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="futureItem">
            <img src="../images/Places/kandy/kandy01.jpg" 
            alt="" 
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kandy</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="futureItem">
            <img src="../images/Places/ella/ella01.jpg" 
            alt="" 
            className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ella</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
