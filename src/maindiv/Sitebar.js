import { useContext } from "react";
import { Username } from "../App";

const Sitebar = () => {
    const {Loginbutton} = useContext(Username)

    return (
        <div className="sitebars" id="sitebar">
            <div> {Loginbutton} </div>
            <h1 className="cafename">Holiday cafe</h1>
        </div>
    )
}
export default Sitebar;