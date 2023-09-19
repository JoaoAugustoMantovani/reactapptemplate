import React from "react";
import App from "../../App";

import './Header.modules.css';

const Header : React.FC = () =>{
return(
    <header>
        <div className="Home">
            <img src={require("../assets/img/image.png")} className="logo" alt= ""/>
        </div>
        <div></div>
    </header>

)
}
export default Header;