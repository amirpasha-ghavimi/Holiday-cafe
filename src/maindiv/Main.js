import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons"; 
import Hotdrink from "./menu contents/hot-drink";
import Food from "./menu contents/main-food";
import Colddrink from "./menu contents/cold-drink";
import Appetizer from "./menu contents/appetizer";
import Dessert from "./menu contents/dessert"


function Main () {

    return (
        <div className="main">
            <section className="options">
                <div id="section1"><Hotdrink /></div>
                <div id="section2"><Colddrink /></div>
                <div id="section3"><Food /></div>
                <div id="section4"><Appetizer /></div>
                <div id="section5"><Dessert /></div>
                <a href="#sitebar" ><div className="uppage"><FontAwesomeIcon icon={faCircleChevronUp} /></div></a>
            </section>


            <section className="menu">
                <div className="menu1">
                <h3>Menu:</h3>
                <a href="#section1"><button className="option-menu"><FontAwesomeIcon icon={faMugHot} /></button></a>
                <a href="#section2"><button className="option-menu"><FontAwesomeIcon icon={faMartiniGlass} /></button></a>
                <a href="#section3"><button className="option-menu"><FontAwesomeIcon icon={faUtensils} /></button></a>
                <a href="#section4"><button className="option-menu"><FontAwesomeIcon icon={faBowlFood} /></button></a>
                <a href="#section5"><button className="option-menu"><FontAwesomeIcon icon={faIceCream} /></button></a>
                </div>
            </section>
        </div>
    )
}


export default Main;