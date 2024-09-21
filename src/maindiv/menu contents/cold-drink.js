import nirvana from "../images/nirvana.jpg";
import limonade from '../images/limonade.jpg';
import darknight from "../images/dark.jpg";
import hamoon from "../images/hamoon.jpg";
import icetea from "../images/icetea.jpg";
import zaferoon from "../images/zaferoon.jpg";
import badakhshan from "../images/badakhshan.jpg";
import soda from "../images/soda.jpg";


const Colddrink = () => {
    return (
        <div>
            <h2>نوشیدنی های سرد</h2>
            <section className="cold-drinks">
                        <div className="cold-drink">
                            <img src={nirvana} width={150} height={150} />
                            <h3>نیروانا</h3>
                            <h4>175,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={limonade} width={150} height={150} />
                            <h3>لیموناد</h3>
                            <h4>140,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={darknight} width={150} height={150} />
                            <h3>دارک نایت</h3>
                            <h4>175,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={hamoon} width={150} height={150} />
                            <h3>هامون</h3>
                            <h4>160,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={icetea} width={150} height={150} />
                            <h3>آیس تی</h3>
                            <h4>155,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={zaferoon} width={150} height={150} />
                            <h3>شربت زعفران</h3>
                            <h4>160,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={badakhshan} width={150} height={150} />
                            <h3>بدخشان</h3>
                            <h4>150,000 T</h4>
                        </div>

                        <div className="cold-drink">
                            <img src={soda} width={150} height={150} />
                            <h3>سدا با لیمو</h3>
                            <h4>100,000 T</h4>
                        </div>
            </section>
        </div>
    )
}


export default Colddrink;