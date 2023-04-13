import Header from "../components/Header";
import lake from "../images/lake.jpg";
function Discounts(){
    return(
        <div className="discount-info">
            <div className="header_component">
                <Header/>
            </div>
            <div className="card2 center">
                <div className="front">
                    <img src={lake} alt=''/>
                </div>
                <div className="back">
                    <div className="back-content">
                        <p>Evening lake</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Discounts;