import pasta from '../images/pasta.jpg';
import penini from '../images/penini.jpg';
import hamburger from "../images/DSC_2103.jpg";
import kebab from '../images/kebab.jpg';


const Food = () => {
    return (
        <div>
            <h2>غذا های اصلی</h2>
            <section className="main-foods">
                <div className="main-food">
                    <img src={pasta} width={150} height={150} />
                    <h3>پاستا</h3>
                    <h4>275,000 T</h4>
                </div>

                <div className="main-food">
                    <img src={penini} width={150} height={150} />
                    <h3>پنینی</h3>
                    <h4>380,000 T</h4>
                </div>

                <div className="main-food">
                    <img src={hamburger} width={150} height={150} />
                    <h3>همبرگر</h3>
                    <h4>280,000 T</h4>
                </div>

                <div className="main-food">
                    <img src={kebab} width={150} height={150} />
                    <h3>کباب تابه ای</h3>
                    <h4>460,000 T</h4>
                </div>
            </section>
        </div>
    )
}

export default Food; 