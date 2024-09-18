import espresso from "../images/DSC_7023.jpg";
import americano from "../images/DSC_7026.jpg";
import latte from "../images/DSC_7020.jpg";
import cappuccino from "../images/capochino.jpg";
import mocha from "../images/DSC_7033.jpg";
import tea from "../images/DSC_7082.jpg";
import frappuccino from "../images/ferapachino.jpg";
import Turkish from "../images/turk.jpg";


const Hotdrink = () => {
    return (
        <div>
            <h2>نوشیدنی های گرم</h2>
                <section className="hot-drinks">

                    <div className="hot-drink">
                        <img src={espresso} width={150} height={150} />
                        <h3>اسپرسو</h3>
                        <h4>90,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={americano} width={150} height={150} />
                        <h3>آمریکانو</h3>
                        <h4>90,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={latte} width={150} height={150} />
                        <h3>لاته</h3>
                        <h4>105,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={cappuccino} width={150} height={150} />
                        <h3>کاپوچینو</h3>
                        <h4>105,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={mocha} width={150} height={150} />
                        <h3>موکا</h3>
                        <h4>115,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={tea} width={150} height={150} />
                        <h3>چای دمی</h3>
                        <h4>70,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={frappuccino} width={150} height={150} />
                        <h3>فراپاچینو</h3>
                        <h4>150,000 T</h4>
                    </div>

                    <div className="hot-drink">
                        <img src={Turkish} width={150} height={150} />
                        <h3>قهوه ترک</h3>
                        <h4>80,000 T</h4>
                    </div>
                </section>
        </div>
    )
}

export default Hotdrink;