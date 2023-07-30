import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/8376979.webp?k=5880a7fa095a3294c94a1e8a4c0241846fe3498b60805158c034dc3196e5b9cd&o=" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubstitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio * 1 bathroom * 21㎡ * 1 king size bed</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;