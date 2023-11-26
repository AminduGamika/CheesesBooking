import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <div>
        <img src="../images/Hotels/hotelResult.jpg" alt="" className="siImg" />
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Queens Hotel</h1>
        <span className="siDistans">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment withAir conditioning
        </span>
        <span className="siFeatures">
          Entire studio ∙ 1 bathroom ∙ 21m<sup>2</sup> ∙ 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          {" "}
          You can cancel later, so lock in this grate price today!
        </span>
      </div>
      <div className="siDetils">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
