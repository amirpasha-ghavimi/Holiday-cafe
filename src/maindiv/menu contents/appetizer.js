import mirzaghasemi from "../images/mirzaghasemi.jpg";
import been from "../images/been.jpg";
import nimroo from "../images/nimroo.jpg";
import caesar from "../images/saezar.jpg";


const Appetizer = () => {
    return (
        <div>
            <h2>پیش غذا </h2>
            <section className="appetizers">
                <div className="appetizer">
                    <img src={mirzaghasemi} width={150} height={150} />
                    <h3>میرزا قاسمی</h3>
                    <h4>225,000 T</h4>
                </div>

                <div className="appetizer">
                    <img src={been} width={150} height={150} />
                    <h3>لوبیا</h3>
                    <h4>140,000 T</h4>
                </div>

                <div className="appetizer">
                    <img src={nimroo} width={150} height={150} />
                    <h3>نیمرو سوسیس</h3>
                    <h4>215,000 T</h4>
                </div>

                <div className="appetizer">
                    <img src={caesar} width={150} height={150} />
                    <h3>سالاد سزار </h3>
                    <h4>300.000 T</h4>
                </div>
            </section>
        </div>
    )
}


export default Appetizer;