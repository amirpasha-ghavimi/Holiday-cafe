import cake from "../images/cake.jpg";
import frenchdessert from "../images/frenchdessert.jpg";
import frenchtoast from "../images/frenchtoast.jpg";
import baghlava from "../images/baghlava.jpg";
import chocolade from "../images/chocolate.jpg";
import badomshake from "../images/badomshake.jpg";
import esspressoshake from "../images/esperesoshake.jpg";
import vanila from "../images/vanila.jpg";


const Dessert = () => {
    return (
        <div>
            <h2>دسر ها </h2>
            <section className="desserts">
                <div className="dessert">
                    <img src={cake} width={150} height={150}></img>
                    <h3>کیک روز</h3>
                    <h4>130,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={frenchdessert} width={150} height={150}></img>
                    <h3>دسر فرانسوی</h3>
                    <h4>170,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={frenchtoast} width={150} height={150}></img>
                    <h3>تست فرانسوی</h3>
                    <h4>180,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={baghlava} width={150} height={150}></img>
                    <h3>چیزکیک باقلوا</h3>
                    <h4>160,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={esspressoshake} width={150} height={150}></img>
                    <h3>شیک اسپرسو</h3>
                    <h4>170.000 T</h4>
                </div>

                <div className="dessert">
                    <img src={chocolade} width={150} height={150}></img>
                    <h3>شیک شکلات</h3>
                    <h4>160,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={badomshake} width={150} height={150}></img>
                    <h3>شیک بادام زمینی</h3>
                    <h4>180,000 T</h4>
                </div>

                <div className="dessert">
                    <img src={vanila} width={150} height={150}></img>
                    <h3>شیک وانیل</h3>
                    <h4>155,000 T</h4>
                </div>
            </section>
        </div>
    )
}

export default Dessert;