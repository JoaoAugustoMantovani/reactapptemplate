import React from "react";
import App from "../../App";
import Logo from '../assets/LogoNoText.png';

const Header : React.FC = () =>{
return(
    <header>
        <div className="Home">
            <img src={Logo}/>
        </div>
    </header>

)
}
export default Header;